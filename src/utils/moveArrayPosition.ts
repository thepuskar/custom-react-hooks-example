/**
 * It takes an array, an id, a new index, and an id name, and returns the array with the item with the
 * id moved to the new index.
 * @param {any[]} arr - any[] - the array you want to move the item in
 * @param {string} id - the id of the item you want to move
 * @param {number} newIndex - The new index of the item
 * @param {string} idName - the name of the id property in the array
 * @returns The array with the item moved to the new index.
 */
export function moveArrayPosition(
  arr: any[],
  id: string,
  newIndex: number,
  idName: string
) {
  const oldIndex = arr.findIndex(
    (item: { [x: string]: string }) => item?.[idName] === id
  );

  if (newIndex >= arr.length) {
    var k = newIndex - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  return arr;
}
