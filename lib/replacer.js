export default function replacer(key, value) {
  if (typeof value === "string") {
    const numberValue = Number(value);

    if (!Number.isNaN(numberValue)) {
      return numberValue;
    }
  }

  return value;
}
