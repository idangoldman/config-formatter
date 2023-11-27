import yaml from 'yaml';
import { replacer } from '#root/lib/utils.js';

export function parse(content) {
  return yaml.parse(content);
};

export function stringify(content) {
  return yaml.stringify(content, replacer);
};
