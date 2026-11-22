// Задача 3. removeDuplicates(arr) — новый массив без дубликатов, порядок сохраняется.
// Ручная реализация: объект seen как «хэш-таблица» уже встреченных чисел.

function removeDuplicates(arr) {
  const seen = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (!seen[value]) {
      seen[value] = true;
      result.push(value);
    }
  }

  return result;
}

// Проверка
console.log(removeDuplicates([1, 2, 2, 5, 6, 7, 5])); // [1, 2, 5, 6, 7]
console.log(removeDuplicates([3, 3, 3])); // [3]
console.log(removeDuplicates([])); // []
console.log(removeDuplicates([4, 1, 4, 0, 1])); // [4, 1, 0]
