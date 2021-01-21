const assert = require('assert')

// escreva sum abaixo 
// Usando o parêmetro rest, ou seja, passando vários valores para a função automaticamente.
const sum = (...values) => values.reduce((acc, currentValue) => acc + currentValue, 0);
assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)