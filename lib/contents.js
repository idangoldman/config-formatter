import { access, constants, readFile, writeFile } from "node:fs/promises";
import { resolve, extname } from "node:path";

import { safeCallback } from "#root/safe-execution.js";
import {
  SUPPORTED_EXTENSIONS,
  SUPPORTED_EXTENSIONS_LIST,
} from "#root/supported.js";

export async function read(filePath = "") {
  const [error, result] = await safeCallback(async () => {
    const absoluteFilePath = resolve(filePath);

    await access(absoluteFilePath, constants.F_OK | constants.R_OK);

    return await readFile(absoluteFilePath, "utf-8");
  });

  if (error) {
    throw new Error(error);
  }

  return result;
}

export async function write(filePath = "", contents = "") {
  const [error, result] = await safeCallback(async () => {
    const absoluteFilePath = resolve(filePath);

    return await writeFile(absoluteFilePath, contents, {
      encoding: "utf-8",
      flag: "w",
    });
  });

  if (error) {
    throw new Error(error);
  }

  return result;
}

export function extension(filePath = "") {
  const fileExtension = extname(filePath).replace(".", "").toLowerCase();

  if (!SUPPORTED_EXTENSIONS.includes(fileExtension)) {
    throw new Error(
      `File "${filePath}" has an unsupported extension, supported extensions: ${SUPPORTED_EXTENSIONS_LIST}.`,
    );
  }

  return fileExtension;
}
