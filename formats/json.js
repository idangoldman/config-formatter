export function parse(content) {
  return JSON.parse(content);
};

export function stringify(content) {
  return JSON.stringify(content, null, 2) + '\n';
};
