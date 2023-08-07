import { Jsonnet } from '#roothanazuki/node-jsonnet';

export function parse(content) {
  return (new Jsonnet()).evaluateSnippet(content);
}

export function stringify(content) {
  return JSON.stringify(content, null, 2).replace(/"([^"]+)":/g, '$1:');
}
