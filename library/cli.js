// import stooge from "@idangoldman/stooge";

// stooge --input="path/to/input.yaml" --output="path/to/output.json" --format="json"
// stooge --input="path/to/input.yaml" --output="path/to/output.json"
// stooge --input="path/to/input.yaml" --format="json"
// stooge --input="path/to/input/dir/*.yaml" --format="json"
// stooge --input="path/to/input/dir/*.yaml" --output-dir="path/to/output/dir" --format="json"

import { read, write, extension } from "#root/library/contents.js";
import { convert } from "#root/library/api.js";

export async function execute(inputFile = "", outputFile = "", format = "yaml") {
  const inputContents = await read(inputFile);
  const fromFormat = extension(inputFile);
  const toFormat = outputFile.length ? extension(outputFile) : format;

  const outputContents = convert(inputContents, fromFormat, toFormat);
  const outputFilePath = output || input.replace(/\.[^.]+$/, `.${format}`);

  await write(outputFilePath, outputContents);
}
