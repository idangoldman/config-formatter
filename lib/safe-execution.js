export default async function safeExecution(func, ...args) {
  try {
    return await func(...args);
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function safeExecutionWithCallback(func, callback, ...args) {
  await safeExecution(func, ...args)
    .then(result => callback(null, result))
    .catch(error => callback(error, null));
}
