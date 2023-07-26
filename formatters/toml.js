import fs from 'fs';
import toml from 'toml';

export async function readTOML(filePath) {
  const fileContent = await fs.readFile(filePath, 'utf8');
  return toml.parse(fileContent);
}

export async function writeTOML(filePath, config) {
  const tomlContent = toml.stringify(config);
  return await fs.writeFile(filePath, tomlContent, 'utf8');
};
