import assert from 'node:assert/strict';
import { describe, it, before, after } from 'node:test';
import { readFileSync } from 'node:fs';
import { $ } from 'zx';
import { rimrafSync } from 'rimraf'

import SUPPORTED_FORMATS from '../formats/_supported.js';


describe('CLI > User Interface Testing', () => {
  before(() => {
    $.prefix = 'node --no-warnings --experimental-json-modules bin/index.js ';
  });

  after(() => {
    const fileExtensionsToDelete = SUPPORTED_FORMATS.toString();
    rimrafSync(`tests/tmp/*.{${fileExtensionsToDelete}}`);
  });

  it('Convert JSON fixture into YAML format', async () => {
    const command = await $`-i tests/fixtures/fixture.json -o tmp/json-to.yml -f yml`;
    const expectedFile = readFileSync('tests/fixtures/fixture.yml', 'utf8');
    const actualFile = readFileSync('tmp/json-to.yml', 'utf8');

    assert.equal(command.exitCode, 0);
    assert.equal(actualFile, expectedFile);
  });
});
