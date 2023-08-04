import { Jsonnet } from '@hanazuki/node-jsonnet';

export function readJSONNET(content) {
  return (new Jsonnet()).evaluateSnippet(content);
}

export function writeJSONNET(content) {
  return JSON.stringify(content, null, 2).replace(/"([^"]+)":/g, '$1:');
}
