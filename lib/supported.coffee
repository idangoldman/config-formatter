import { extname } from "node:path"

FORMATS = [
  # Current formats:
  "ini"
  "json"
  ["yaml", "yml"]

  # Future formats:
  # 'cson', # CoffeeScript JSON
  # 'csv',
  # 'json-ld',
  # 'json5',
  # 'jsonc',
  # 'jsonl',
  # 'jsonnet',
  # 'toml',
]

export SUPPORTED_EXTENSIONS = FORMATS.flat()
export SUPPORTED_EXTENSIONS_LIST = SUPPORTED_EXTENSIONS.join(",")

export getFileFormatFromFilePath = (filePath = "") ->
  extension = extname(filePath)?.replace(".", "").toLowerCase()

  throw new Error("File #{filePath} does not have an extension.") unless extension

  throw new Error("File #{filePath} has an unsupported extension.") unless SUPPORTED_EXTENSIONS.includes extension

  selectedFormat = ""
  for format in FORMATS
    if Array.isArray(format) and format.includes extension
      selectedFormat = format[0]
      break

    if format is extension
      selectedFormat = format
      break

  throw new Error("File #{filePath} has an unknown extension.") unless selectedFormat.length

  selectedFormat
