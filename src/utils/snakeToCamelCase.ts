/**
 * Replace all instances of a hyphen or underscore followed by a lowercase letter with the same letter
 * in uppercase.
 * @param {string} str - string - The string to convert.
 */
export const snakeToCamelCase = (str: string) =>
  str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", "")
    );
