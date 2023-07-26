import fs from 'fs';

export async function readJSON (filePath) {
  const fileContent = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContent);
};

export async function writeJSON(filePath, config) {
  const jsonContent = JSON.stringify(config, null, 2);
  return await fs.writeFile(filePath, jsonContent, 'utf8');
};
