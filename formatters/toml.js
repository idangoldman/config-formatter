import toml from 'toml';

export async function readTOML(content) {
  return toml.parse(content);
}

export async function writeTOML(content) {
  return toml.stringify(content);
};
