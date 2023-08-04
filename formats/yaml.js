import yaml from 'js-yaml';

export function readYAML(content) {
  return yaml.safeLoad(content);
};

export function writeYAML(content) {
  return yaml.safeDump(content);
};
