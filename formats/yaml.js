import yaml from 'yaml';

export function parse(content) {
  return yaml.parse(content);
};

export function stringify(content) {
  return yaml.stringify(content);
};
