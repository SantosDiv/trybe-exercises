const assert = require('assert');
// escreva a função addOne (adicione um em cada número do array) aqui

// Usei o método map() que cria um novo array, aplicando a mudança que desejo dentro da callBack
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const addOne = (arr) => arr.map((num) => {return num+1});

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);