import { $ } from "zx";
import { BeforeAll, Given, When, Then } from "@cucumber/cucumber";
import { readFileSync } from "fs";
import { rimrafSync } from "rimraf";
import assert from "assert";

import { SUPPORTED_EXTENSIONS_LIST } from "#root/library/supported.js";

BeforeAll(() => {
  rimrafSync(`tmp/*.{${SUPPORTED_EXTENSIONS_LIST}}`, { glob: true });
})

Given("Stooge command prefix with {string}", function (commandPrefix) {
  $.prefix = commandPrefix + " ";
});

Given("Fixture file in {string} format", function (fromFormat) {
  this.fromFormat = fromFormat.toLowerCase();
  this.fixturePath = `tests/fixtures/fixture.${fromFormat}`;
});

When("Convert the fixture file to {string} format", async function (toFormat) {
  this.toFormat = toFormat.toLowerCase();
  this.outputPath = `tmp/${this.fromFormat}-to.${this.toFormat}`;

  const command =
    await $`-i ${this.fixturePath} -o ${this.outputPath} -f ${this.toFormat}`;

  assert.equal(command.exitCode, 0);
});

Then("Converted file should match the fixture file in {string} format", function (toFormat) {
  const convertedFile = readFileSync(this.outputPath, "utf8");
  const fixtureFile = readFileSync(
    `tests/fixtures/fixture.${toFormat.toLowerCase()}`,
    "utf8"
  );

  assert.equal(convertedFile, fixtureFile);
});
