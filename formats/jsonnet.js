import { Jsonnet } from '@hanazuki/node-jsonnet';

export function parse(content) {
  return (new Jsonnet()).evaluateSnippet(content);
}

export function convert(content) {
  return JSON.stringify(content, null, 2).replace(/"([^"]+)":/g, '$1:');
}
