import fs from 'fs';
import yaml from 'js-yaml';

export async function readYAML(filePath) {
  const fileContent = await fs.readFile(filePath, 'utf8');
  return yaml.safeLoad(fileContent);
};

export async function writeYAML(filePath, config) {
  const yamlContent = yaml.safeDump(config);
  return await fs.writeFile(filePath, yamlContent, 'utf8');
};
