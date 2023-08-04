import fs from 'fs';

export async function read(filePath) {
  return await fs.readFile(filePath, 'utf8');
}

export async function write(filePath, content) {
  return await fs.writeFile(filePath, content, 'utf8');
}
