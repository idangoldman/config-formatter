import { extension } from "#root/library/contents.js";
import { convert, dumpFile, loadFile } from "#root/library/api.js";

export async function execute(
  inputFile = "",
  outputFile = "",
  format = "yaml"
) {
  const fromFormat = extension(inputFile);
  const toFormat = outputFile.length ? extension(outputFile) : format;

  const inputContents = await loadFile(inputFile, fromFormat);
  const outputContents = convert(inputContents, fromFormat, toFormat);

  const outputFilePath = outputFile.length
    ? outputFile
    : `${inputFile.replace(new Regex(`\\.${fromFormat}$`, "i"), toFormat)}`;

  await dumpFile(outputFilePath, outputContents, toFormat);
}
