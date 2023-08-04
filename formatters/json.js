export function readJSON (content) {
  return JSON.parse(content);
};

export function writeJSON(content) {
  return JSON.stringify(content, null, 2);
};
