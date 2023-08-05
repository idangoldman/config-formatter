import { SUPPORTED_FORMATS } from '#/lib/supported.js';

export const validateFormat = (format) => {
  if (!SUPPORTED_FORMATS.includes(format)) {
    throw new Error(`Format "${format}" is not supported.`);
  }
}
