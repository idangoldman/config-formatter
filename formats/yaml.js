import yaml from 'js-yaml';

export function parse(content) {
  return yaml.safeLoad(content);
};

export function convert(content) {
  return yaml.safeDump(content);
};
