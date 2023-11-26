import { readContent, writeContent } from '#root/lib/read-write.js';

export async function performConversion(inputFile = '', outputFile = '', format = 'yaml') {
  const contentObject = await readContent(inputFile);
  const outputFilePath = outputFile || inputFile.replace(/\.[^.]+$/, `.${format}`);
  await writeContent(outputFilePath, contentObject);
}
