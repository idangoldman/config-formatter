import { readFile, writeFile } from 'node:fs';

export async function read(filePath) {
  return await readFile(filePath, 'utf8');
}

export async function write(filePath, content) {
  return await writeFile(filePath, content, 'utf8');
}
