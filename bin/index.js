#!/usr/bin/env node

import { Command } from 'commander';
import SUPPORTED_FORMATS from '../formats/_supported.js';
import packageJson from '../package.json' assert { type: "json" };

const program = new Command();

program
  .option('-i, --input <input>', 'input file')
  .option('-o, --output <output>', 'output file')
  .option('-of, --output-folder <output>', 'output file folder', '.output')
  .option('-f, --format <format>', `Convert into one of the supported formats: ${SUPPORTED_FORMATS.join(', ')}`)
  .version(packageJson.version, '-v, --version', 'Show the installed version')
  .parse(process.argv);
