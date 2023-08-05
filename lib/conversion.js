import { read, write } from '#/lib/read-write.js';
import { SUPPORTED_FORMATS } from '#/formats/_supported.js';
import safeExecution from '#/lib/safe-execution.js';

export function performConversion(input = '', output = '', format = '') {
  // Check if the input file is valid
  if (!input) {
    throw new Error('Input file is required.');
  }

  // Check if the format is supported
  if (!SUPPORTED_FORMATS.includes(format)) {
    throw new Error(`Format "${format}" is not supported.`);
  }

  // Read the input file
  const inputContent = read(input);

  // Convert the input file content into the desired format
  const outputContent = safeExecution(convertFileToDifferentFormat, inputContent, format);

  // Write the output file
  write(output, outputContent);
}

function convertFileToDifferentFormat(inputContent, format) {
  const { convert } = await import(`#/formats/${format}.js`);
  const outputContent = convert(inputContent);
  return outputContent;
}
