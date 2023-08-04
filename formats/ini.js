import ini from 'ini';

export function readINI(content) {
  return ini.parse(content);
}

export function writeINI(content) {
  return ini.stringify(content);
}
