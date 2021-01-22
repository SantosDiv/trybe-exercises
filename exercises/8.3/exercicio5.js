const assert = require("assert");

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  // escreva seu código aqui

  // Foi usado o método Match() que retorna um array com os valores que batem com a RegExp passada.
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match

  const regex = new RegExp('a','gi');
  names.map((name) => name.match(regex).length);
  return names.reduce((previousValue, currentValue) => {
  // Como o match me retorna um array com os valores de todos os A em cada palavra eu só contei o tamanho do array com o length.
    return previousValue + currentValue.match(regex).length;
  }, 0);
}

console.log(containsA());

assert.deepStrictEqual(containsA(), 20);
