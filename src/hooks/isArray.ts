export const useArray = () => {
  /**
   * It takes an array and an element or an array of elements, and pushes the element(s) onto the array
   * @param {T[]} array - T[] - The array to push the elements to.
   * @param {T | T[]} elements - T | T[]
   * @returns Appended array.
   */
  function push<T>(array: T[], elements: T | T[]): T[] {
    if (Array.isArray(elements)) {
      array.push(...elements);
      return array;
    }
    array.push(elements);
    return array;
  }

  /**
   * "filter takes an array and a callback function, and returns a new array containing only the elements
   * of the original array for which the callback function returns true."
   *
   * The callback function is called for each element of the array. If the callback function returns
   * true, the element is included in the new array. If the callback function returns false, the element
   * is not included in the new array
   * @param {T[]} array - T[] - The array to filter
   * @param callback - (element: T, index: number, array: T[]) => boolean
   * @returns An array of numbers.
   */
  function filter<T>(
    array: T[],
    callback: (element: T, index: number, array: T[]) => boolean
  ): T[] {
    return array.filter(callback);
  }

  /**
   * It moves an element from one index to another in an array.
   * @param {T[]} array - The array to move an element from and to.
   * @param {number} fromIndex - The index of the item you want to move.
   * @param {number} toIndex - The index of the element before which to insert the element.
   * @returns the array with the element moved to the new index.
   */
  function move<T>(array: T[], fromIndex: number, toIndex: number): T[] {
    const element = array.splice(fromIndex, 1)[0];
    array.splice(toIndex, 0, element);
    return array;
  }

  return { push, filter, move };
};
