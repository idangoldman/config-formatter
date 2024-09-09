import { Jsonnet } from "@hanazuki/node-jsonnet"
import { parse as jsonParse, stringify as jsonStringify } from "#root/formats/json.js"

export parse = (content) ->
  jsonnet = new Jsonnet()
  jsonnet.evaluateSnippet(content).then jsonParse

export stringify = (content) ->
  jsonStringify(content).replace /"([^"]+)":/g, "$1:"
