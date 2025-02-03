/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === 0) return '';
  if (!Number(size)) return string;

  let result = '';
  let count = 0; // Счетчик последовательных символов
  let previousChar = ''; // Храним предыдущий символ

  for (const char of string) {
    // Если текущий символ совпадает с предыдущим, увеличиваем счетчик
    if (char === previousChar) {
      count++;
    } else {
      count = 1; // Сбрасываем счетчик, если символ изменился
    }

    // Если счетчик не превышает size, добавляем символ в результат
    if (count <= size) {
      result += char;
    }

    previousChar = char; // Обновляем предыдущий символ
  }

  return result; // Возвращаем результат
}


