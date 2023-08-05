export function parse(content) {
  return JSON.parse(content);
};

export function convert(content) {
  return JSON.stringify(content, null, 2);
};
