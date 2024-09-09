import { access, constants, readFile, writeFile } from "node:fs/promises"
import path from "node:path"

import { safeCallback } from "#root/safe-execution.js"
import { getFileFormatFromFilePath } from "#root/supported.js"

export readContent = async (filePath = "") ->
  absoluteFilePath = path.resolve filePath

  [error, result] = await safeCallback async ->
    await access absoluteFilePath, constants.F_OK | constants.R_OK
    readContent = await readFile absoluteFilePath, "utf-8"
    await parseContentToObject absoluteFilePath, readContent

  throw new Error(error) if error

  result

export writeContent = async (filePath = "", contentObject = {}) ->
  absoluteFilePath = path.resolve filePath

  [error, result] = await safeCallback async ->
    stringifiedContent = await parseObjectToContent absoluteFilePath, contentObject
    await writeFile absoluteFilePath, stringifiedContent,
      encoding: "utf-8"
      flag: "w"

  throw new Error(error) if error

  result

parseContentToObject = async (filePath = "", content = "") ->
  format = getFileFormatFromFilePath filePath
  { parse } = await import "#root/formats/#{format}.js"
  parse content

parseObjectToContent = async (filePath = "", contentObject = {}) ->
  format = getFileFormatFromFilePath filePath
  { stringify } = await import "#root/formats/#{format}.js"
  stringify contentObject
