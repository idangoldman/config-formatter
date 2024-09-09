import { extensionToFormat, dumpFile, loadFile } from "#root/api.js"

export execute = async (
  inputFile = "",
  outputFile = "",
  format = "yaml"
) ->
  fromFormat = extensionToFormat inputFile
  toFormat = extensionToFormat format, outputFile

  outputFilePath = if outputFile.length > 0
    then outputFile
    else inputFile.replace new RegExp("\\.#{fromFormat}$", "i"), ".#{toFormat}"

  contents = await loadFile inputFile

  await dumpFile outputFilePath, contents, toFormat
