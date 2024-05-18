import assert from 'node:assert/strict';
import { describe, it, before, afterEach } from 'node:test';
import { readFileSync } from 'node:fs';
import { $ } from 'zx';
import { rimrafSync } from 'rimraf'

import { SUPPORTED_FORMATS } from '#root/library/supported.js';

describe('CLI > User Interface', () => {
  before(() => {
    $.prefix = "node --trace-warnings bin/index.js ";
  });

  afterEach(() => {
    const fileExtensionsToDelete = SUPPORTED_FORMATS.toString();
    rimrafSync(`tmp/*.{${fileExtensionsToDelete}}`);
  });

  describe('File Formats Conversion', () => {
    for (const fromFormat of SUPPORTED_FORMATS) {
      for (const toFormat of SUPPORTED_FORMATS) {
        if (fromFormat === toFormat) continue;

        it(`Convert ${fromFormat.toUpperCase()} fixture file into ${toFormat.toUpperCase()} format file`, async () => {
          const command = await $`-i tests/fixtures/fixture.${fromFormat} -o tmp/${fromFormat}-to.${toFormat} -f ${toFormat}`;
          assert.equal(command.exitCode, 0);

          const fixtureFile = readFileSync(`tests/fixtures/fixture.${toFormat}`, 'utf8');
          const convertedFile = readFileSync(`tmp/${fromFormat}-to.${toFormat}`, 'utf8');
          assert.equal(fixtureFile, convertedFile);
        });
      }
    }
  });
});
