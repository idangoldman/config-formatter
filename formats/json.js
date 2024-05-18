import replacer from "#root/library/replacer.js";

export function parse(content) {
  return JSON.parse(content);
};

export function stringify(content) {
  return JSON.stringify(content, replacer, 2) + '\n';
};
