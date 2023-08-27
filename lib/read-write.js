import { access, constants, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { safeCallback } from '#root/lib/ssafe-execution.js';

export async function readContent(filePath = '') {
  const [ error, result ] = safeCallback(async () => {
    const absoluteFilePath = path.resolve(filePath);

    await access(absoluteFilePath, constants.F_OK | constants.R_OK);
    return await readFile(absoluteFilePath);
  });

  if (error) {
    throw new Error(`File ${filePath} does not exist or is not readable.`);
  }

  return result;
}

export async function writeContent(filePath = '', content = '') {
  const [ error, result ] = safeCallback(async () => {
    const absoluteFilePath = path.resolve(filePath);

    await access(absoluteFilePath, constants.F_OK | constants.W_OK);
    return await writeFile(filePath, content);
  });

  if (error) {
    throw new Error(`File ${absoluteFilePath} does not exist or is not writeable.`);
  }

  return result;
}

// create a function getting inputFile, outputFile, format params and returning file format
export function outputFilePath(inputFile = '', outputFile = '', format = '') {
  if (format) return format;

  const inputFormat = path.extname(inputFile).replace('.', '');
  const outputFormat = path.extname(outputFile).replace('.', '');

  if (inputFormat && outputFormat && inputFormat !== outputFormat) {
    throw new Error(`Input file format ${inputFormat} does not match output file format ${outputFormat}.`);
  }

  return inputFormat || outputFormat;
}
