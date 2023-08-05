import assert from 'node:assert/strict';
import { describe, it, before, afterEach } from 'node:test';
import { readFileSync } from 'node:fs';
import { $ } from 'zx';
import { rimrafSync } from 'rimraf'

import SUPPORTED_FORMATS from '../formats/_supported.js';


describe('CLI > User Interface Testing', () => {
  before(() => {
    $.prefix = 'node --no-warnings --experimental-json-modules bin/index.js ';
  });

  afterEach(() => {
    const fileExtensionsToDelete = SUPPORTED_FORMATS.toString();
    rimrafSync(`tests/tmp/*.{${fileExtensionsToDelete}}`);
  });

	describe('File Formats Conversion Testing', () => {
	  for (const fromFormat of SUPPORTED_FORMATS) {
	    for (const toFormat of SUPPORTED_FORMATS) {
	      if (fromFormat === toFormat) continue;
	
				it('should convert the ${fromFormat.toUpperCase()} fixture into ${toFormat.toUpperCase()} format', async () => {
					const command = await $`-i tests/fixtures/fixture.${fromFormat} -o tmp/${fromFormat}-to-${toFormat}.${toFormat} -f ${toFormat}`;
					const expectedFile = readFileSync(`tests/fixtures/fixture.${toFormat}`, 'utf8');
					const actualFile = readFileSync(`tmp/${fromFormat}-to-${toFormat}.${toFormat}`, 'utf8');
	
					assert.equal(command.exitCode, 0);
					assert.equal(actualFile, expectedFile);
				});
	    }
	  }
	});
});
