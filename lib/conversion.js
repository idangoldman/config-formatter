import { readContent, writeContent, generateFilePath, filterOutFormat } from '#root/lib/read-write.js';

export async function performConversion(inputFile = '', outputFile = '', format = '') {
  const inputContent = await readContent(inputFile);

  format = filterOutFormat(inputFile, outputFile, format);
  const outputFilePath = outputFile || generateFilePath(inputFile, format);
  const outputContent = await convertContentToFormat(inputContent, format);

  await writeContent(outputFilePath, outputContent);
}

async function convertContentToFormat(content, format) {
  const { convert } = await import(`#/formats/${format}.js`);
  const outputContent = convert(content);

  return outputContent;
}
