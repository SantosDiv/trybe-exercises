const assert = require('assert');
// escreva a função wordLengths aqui

// Usei o método map() que cria um novo array, aplicando a mudança que desejo dentro da callBack
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const wordLengths = (words) => words.map((word) => {return word.length});

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);