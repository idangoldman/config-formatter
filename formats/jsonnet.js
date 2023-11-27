import { Jsonnet } from '@hanazuki/node-jsonnet';
import { parse as jsonParse, stringify as jsonStringify } from '#root/formats/json.js'

export function parse(content) {
  const jsonnet = new Jsonnet();
  return jsonnet.evaluateSnippet(content).then(jsonParse);
}

export function stringify(content) {
  return jsonStringify(content).replace(/"([^"]+)":/g, '$1:');
}
