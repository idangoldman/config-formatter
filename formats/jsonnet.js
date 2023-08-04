import { Jsonnet } from '@hanazuki/node-jsonnet';

export function readJSONNET(content) {
  const jsonn = new Jsonnet();
  return jsonn.evaluateSnippet(content);
}

export async function writeJSONNET(content) {
  return JSON.stringify(content, null, 2).replace(/"([^"]+)":/g, '$1:');
}
