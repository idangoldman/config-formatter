import toml from "toml";

export function parse(content) {
  return toml.parse(content);
}

export function stringify(content) {
  return toml.stringify(content);
}
