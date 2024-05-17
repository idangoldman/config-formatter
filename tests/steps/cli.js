const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const assert = require("assert");
const { readFileSync } = require("fs");
const { $ } = require("zx");
const { rimrafSync } = require("rimraf");

const { SUPPORTED_FORMATS } = require("#root/lib/supported.js");

Before(() => {
  $.prefix = "node --no-warnings --experimental-json-modules bin/index.js ";
});

After(() => {
  const fileExtensionsToDelete = SUPPORTED_FORMATS.toString();
  rimrafSync(`tmp/*.{${fileExtensionsToDelete}}`);
});

Given("I have a fixture file in {string} format", async function (fromFormat) {
  this.fromFormat = fromFormat;
  this.fixturePath = `tests/fixtures/fixture.${fromFormat}`;
});

When(
  "I convert the fixture file to {string} format",
  async function (toFormat) {
    this.toFormat = toFormat;
    this.outputPath = `tmp/${this.fromFormat}-to.${this.toFormat}`;
    const command =
      await $`-i ${this.fixturePath} -o ${this.outputPath} -f ${this.toFormat}`;
    assert.equal(command.exitCode, 0);
  }
);

Then(
  "the converted file should match the fixture file in {string} format",
  function (toFormat) {
    const fixtureFile = readFileSync(
      `tests/fixtures/fixture.${toFormat}`,
      "utf8"
    );
    const convertedFile = readFileSync(this.outputPath, "utf8");
    assert.equal(fixtureFile, convertedFile);
  }
);
