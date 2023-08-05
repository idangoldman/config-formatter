#!/usr/bin/env node

// Examples of usage:
// stooge -i tests/fixtures/fixture.yaml -o tests/tmp/yaml-to.json -f json

import { Command } from 'commander';
import packageJson from '#/package.json' assert { type: "json" };

import { SUPPORTED_FORMATS } from '#/lib/supported.js';
import { performConversion } from '#/lib/conversion.js';

const program = new Command();

program
  .option('-i, --input <input>', 'input file')
  .option('-o, --output <output>', 'output file')
  .option('-of, --output-folder <output>', 'output file folder.', 'same as the input file')
  .option('-f, --format <format>', `Convert into one of the supported formats: ${SUPPORTED_FORMATS.join(', ')}.`, 'yml')
  .version(packageJson.version, '-v, --version', 'Show the installed version')
  .parse(process.argv);

// Get the values of program arguments
const { input, output, format } = program;

// Call the conversion function with the program arguments
performConversion(input, output, format);

process.exit(0);
