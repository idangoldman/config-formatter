import { SUPPORTED_EXTENSIONS } from '#root/lib/supported.js';

export const validateFormat = (format) => {
  if (!SUPPORTED_EXTENSIONS.includes(format)) {
    throw new Error(`Format "${format}" is not supported.`);
  }
}
