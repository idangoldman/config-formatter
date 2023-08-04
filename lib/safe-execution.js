export default async function safeExecution(func, ...args) {
  try {
    return { error: null, result: await func(...args) };
  } catch (error) {
    return { error, result: null };
  } finally {
    // Code to be executed regardless of error or success can be placed here
  }
}
