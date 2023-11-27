import path from 'path';

const FORMATS = [
  // Current formats:
  'ini',
  'json',
  'jsonnet',
  ['yaml', 'yml'],

  // Future formats:
  // 'csv',
  // 'json5',
  // 'jsonc',
  // 'jsonl',
  // 'json-ld',
  // 'toml',
];

export const SUPPORTED_FORMATS = FORMATS.map(
  (format) => Array.isArray(format) ? format[0] : format
);

export const SUPPORTED_EXTENSIONS = FORMATS.flat();

export function getFileFormatFromFilePath(filePath = '') {
  const extension = path.extname(filePath)?.replace('.', '').toLowerCase();

  if (!extension) {
    throw new Error(`File ${filePath} does not have an extension.`);
  }

  if (!SUPPORTED_EXTENSIONS.includes(extension)) {
    throw new Error(`File ${filePath} has an unsupported extension.`);
  }

  let selectedFormat = '';
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
