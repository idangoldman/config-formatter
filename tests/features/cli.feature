Feature: CLI User Interface

  Background:
    Given Stooge command prefix with "node --trace-warnings bin/index.js "

  Scenario Outline: Convert fixture file from "<FROM_FORMAT>" to "<TO_FORMAT>" format
    Given Fixture file in "<FROM_FORMAT>" format
    When Convert the fixture file to "<TO_FORMAT>" format
    Then Converted file should match the fixture file in "<TO_FORMAT>" format

    Examples:
      | FROM_FORMAT | TO_FORMAT |
      | INI         | JSON      |
      | INI         | YAML      |
      | JSON        | INI       |
      | JSON        | YAML      |
      | YAML        | INI       |
      | YAML        | JSON      |
