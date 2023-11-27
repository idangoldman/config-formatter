import ini from 'ini';

export function parse(content) {
  return ini.parse(content);
}

export function stringify(content) {
  const options = {
    bracketedArray: true,
    newline: '\n',
    sort: false,
    whitespace: true
  };

  return ini.stringify(content, options);
}
