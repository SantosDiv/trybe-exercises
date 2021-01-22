const assert = require('assert');

const myList = [1, 2, 3];
// Expected => [3, 2, 1];

// escreva swap abaixo

// Usando o Array Destructuring
// const swap = ([first, second, third]) => [third, second, first];

// Usando o método reverse()
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

const swap = (myList) => myList.reverse();
const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);

