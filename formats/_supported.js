export const SUPPORTED_FORMATS = [
  // Current formats:
  'ini',
  'json',
  'jsonnet',
  'yml',

  // Future formats:
  // 'csv',
  // 'json5',
  // 'jsonc',
  // 'jsonl',
  // 'toml',
];

export const SUPPORTED_EXTENSIONS = [...SUPPORTED_FORMATS, 'yaml' ];

export const validateFormat = (format) => {
  if (!SUPPORTED_FORMATS.includes(format)) {
    throw new Error(`Format "${format}" is not supported.`);
  }
}
