import ini from 'ini';

export function parse(content) {
  return ini.parse(content);
}

export function stringify(content) {
  return ini.stringify(content);
}
