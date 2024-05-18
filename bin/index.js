#!/usr/bin/env node

// Examples of usage:
// stooge -i tests/fixtures/fixture.yaml -o tests/tmp/yaml-to.json -f json

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { SUPPORTED_EXTENSIONS } from '#root/library/supported.js';
import { performConversion } from '#root/library/conversion.js';

const argv = yargs(hideBin(process.argv))
  .usage('Usage: stooge --input <input> --output <output> --format <format>')
  .option('input', {
    alias: ['i', 'input'],
    describe: 'Path to the single or multiple input files to be converted.',
    type: 'string'
  })
  .option('output', {
    alias: ['o', 'output'],
    describe: 'Path to the output file or folder for saving the converted content.',
    type: 'string'
  })
  .option('format', {
    alias: ['f', 'format'],
    choices: SUPPORTED_EXTENSIONS,
    default: 'yml',
    describe: `Format seting of the output file, supported formats: ${SUPPORTED_EXTENSIONS.join(', ')}.`,
    type: 'string',
  })
  .argv;

const { input, output, format } = argv;
await performConversion(input, output, format);

process.exit(0);
