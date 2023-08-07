import yaml from 'js-yaml';

export function parse(content) {
  return yaml.safeLoad(content);
};

export function stringify(content) {
  return yaml.safeDump(content);
};
