import { readContent, writeContent } from "#root/read-write.js"

export performConversion = (
  inputFile = "",
  outputFile = "",
  format = "yaml"
) ->
  contentObject = await readContent inputFile
  outputFilePath = outputFile or inputFile.replace /\.[^.]+$/, ".#{format}"

  await writeContent outputFilePath, contentObject
