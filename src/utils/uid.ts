/**
 * This function returns a random string of 16 characters.
 * @returns A random number between 0 and the current date in milliseconds.
 */
export const uid = (): string => {
  return Math.floor(Math.random() * Date.now()).toString(16);
};
