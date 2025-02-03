/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  if (!Array.isArray(arr)) throw new Error('Некорректные данные');

  const copyArr = [...arr];
  if (param === 'asc') {
    copyArr.sort((a, b) => a.localeCompare(b, ['ru', 'en'], { caseFirst: 'upper' }));
  }
  else {
    copyArr.sort((a, b) => b.localeCompare(a, ['ru', 'en'], { caseFirst: 'upper' }));
  }
  return copyArr;
}
