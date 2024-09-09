import { extensionToFormat, dumpFile, loadFile } from "#root/api.js";

export async function execute(
  inputFile = "",
  outputFile = "",
  format = "yaml",
) {
  const fromFormat = extensionToFormat(inputFile);
  const toFormat = extensionToFormat(format, outputFile);

  const outputFilePath =
    outputFile.length > 0
      ? outputFile
      : inputFile.replace(new RegExp(`\\.${fromFormat}$`, "i"), `.${toFormat}`);

  const contents = await loadFile(inputFile);

  await dumpFile(outputFilePath, contents, toFormat);
}
