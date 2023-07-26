import fs from 'fs';
import ini from 'ini';

export async function readINI(filePath) {
  const fileContent = await fs.readFile(filePath, 'utf8');
  return ini.parse(fileContent);
}

export async function writeINI(filePath, config) {
  const iniContent = ini.stringify(config);
  return await fs.writeFile(filePath, iniContent, 'utf8');
}
