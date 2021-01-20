
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
    // Usado o método array1.concat(array2) que retorna um novo array contendo todos os array ou valores passados
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
  return arrays.reduce((acc, array)=> acc.concat(array));
}
console.log(flatten());
assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);