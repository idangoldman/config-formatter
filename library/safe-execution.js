import logger from "#root/library/logger.js";

export async function safeCallback(callback) {
  let error = null;
  let result = null;

  try {
    result = await callback();
  } catch (err) {
    error = err;
  } finally {
    if (error) {
      logger.warn("Error:", error);
    } else {
      logger.info("Success:", result);
    }

    return [error, result];
  }
}

export async function safeReturnBool(callback) {
  const [error] = await safeCallback(callback);

  return !error;
}
