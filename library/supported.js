import { extname } from "node:path";

const FORMATS = [
  // Current formats:
  "ini",
  "json",
  ["yaml", "yml"],

  // Future formats:
  // 'cson', // CoffeeScript JSON
  // 'csv',
  // 'json-ld',
  // 'json5',
  // 'jsonc',
  // 'jsonl',
  // 'jsonnet',
  // 'toml',
];

export const SUPPORTED_EXTENSIONS = FORMATS.flat();
export const SUPPORTED_EXTENSIONS_LIST = SUPPORTED_EXTENSIONS.join(",");

export function getFileFormatFromFilePath(filePath = "") {
  const extension = extname(filePath)?.replace(".", "").toLowerCase();

  if (!extension) {
    throw new Error(`File ${filePath} does not have an extension.`);
  }

  if (!SUPPORTED_EXTENSIONS.includes(extension)) {
    throw new Error(`File ${filePath} has an unsupported extension.`);
  }

  let selectedFormat = "";
  for (const format of FORMATS) {
    if (Array.isArray(format) && format.includes(extension)) {
      selectedFormat = format[0];
      break;
    }

    if (format === extension) {
      selectedFormat = format;
      break;
    }
  }

  if (!selectedFormat.length) {
    throw new Error(`File ${filePath} has an unknown extension.`);
  }

  return selectedFormat;
}
