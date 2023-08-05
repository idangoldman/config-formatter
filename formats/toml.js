import toml from 'toml';

export async function parse(content) {
  return toml.parse(content);
}

export async function convert(content) {
  return toml.stringify(content);
};
