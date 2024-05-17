Feature: CLI User Interface Testing

  Background:
    Given I set the command prefix to "node --no-warnings --experimental-json-modules bin/index.js"

  Scenario Outline: Convert fixture file from <from> to <to> format
    Given I have a fixture file in <from> format
    When I convert the fixture file to <to> format
    Then the converted file should match the fixture file in <to> format

    Examples:
      | from | to   |
      | ini  | json |
      | ini  | yaml |
      | json | ini  |
      | json | yaml |
      | yaml | ini  |
      | yaml | json |
