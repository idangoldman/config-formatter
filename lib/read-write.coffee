import { access, constants, readFile, writeFile } from "node:fs/promises"
import path from "node:path"

import { safeCallback } from "#root/safe-execution.js"
import { getFileFormatFromFilePath } from "#root/supported.js"

export readContent = (filePath = "") ->
  absoluteFilePath = path.resolve filePath

  [error, result] = await safeCallback ->
    await access absoluteFilePath, constants.F_OK | constants.R_OK
    readContent = await readFile absoluteFilePath, "utf-8"
    await parseContentToObject absoluteFilePath, readContent

  throw new Error(error) if error

  result

export writeContent = (filePath = "", contentObject = {}) ->
  absoluteFilePath = path.resolve filePath

  [error, result] = await safeCallback ->
    stringifiedContent = await parseObjectToContent absoluteFilePath, contentObject
    await writeFile absoluteFilePath, stringifiedContent,
      encoding: "utf-8"
      flag: "w"

  throw new Error(error) if error

  result

parseContentToObject = (filePath = "", content = "") ->
  format = getFileFormatFromFilePath filePath
  { parse } = await import("#root/formats/#{format}.js")
  parse content

parseObjectToContent = (filePath = "", contentObject = {}) ->
  format = getFileFormatFromFilePath filePath
  { stringify } = await import("#root/formats/#{format}.js")
  stringify contentObject
