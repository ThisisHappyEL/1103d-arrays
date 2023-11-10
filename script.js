// задача №1
const fill = (arraySize, value) => {
  const newArr = [];
  for (let i = 0; i < arraySize; i += 1) {
    newArr.push(value);
  }
  return newArr;
};
// заранее написанный тест:
const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill)) // ['a', 'a', 'a']
// мною написанные тесты:
console.log(fill(5, 'лягушка')) // ['лягушка', 'лягушка', 'лягушка', 'лягушка', 'лягушка']
console.log(fill(4, 5)) // [5, 5, 5, 5]
// задача №2
const reverse = (array) => array.reverse();

// заранее написанный тест:
const data2 = [1, 2, 3];
console.log(reverse(data2)); // [3, 2, 1]
// мною написанные тесты:
console.log(reverse(['ехал', 'грека', 'через', 'реку'])); // ['реку', 'через', 'грека', 'ехал']
console.log(reverse(['рельсы', 'рельсы', 'шпалы', 'шпалы'])); // ['шпалы', 'шпалы', 'рельсы', 'рельсы']
// задача №3
const compact = (array) => {
  const result = [];
  for (item of array) {
    if (item !== 0 && item !== null && item !== false && item !== true && item !== '' && item !== undefined) {
      result.push(item);
    }
  }
  return result;
};
// заранее написанный тест:
const data3 = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data3)) // [1, 2, 3]
// мною написанные тесты:
console.log(compact(['вся', 'моя', 'жизнь', '-', 'это', false])) // ['вся', 'моя', 'жизнь', '-', 'это']
console.log(compact(['враг', undefined, 'приступаю' , 'к', 'патрулированию', 'номер', null])) // ['враг', 'приступаю', 'к', 'патрулированию', 'номер']
