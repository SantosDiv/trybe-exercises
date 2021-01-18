const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split("");
  const results = [];
  console.log(characters);
  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === "a" ||
      characters[i] === "o" ||
      characters[i] === "i" ||
      characters[i] === "e" ||
      characters[i] === "u"
    ) {
      results.push(characters[i]); //Colocar o número aqui
    } else {
      results.push("_"); // Permanecer a letra aqui
    }
  }
  return results;
};

const parameter = "Dayane";
const result = "D1y2n3";

console.log(removeVowels(parameter));
// Testes
// assert.strictEqual(removeVowels(parameter), result);
