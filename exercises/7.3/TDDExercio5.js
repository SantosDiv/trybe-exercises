const assert = require('assert');

const greetPeople = (people) => people.map((name) => { 
  if (typeof name !== 'string') throw 'Esse vetor só pode conter strings';
  return `Hello ${name}`;
});

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
console.log(greetPeople(parameter));
assert.deepStrictEqual(greetPeople(parameter), result);
assert.throws(()=>{
    greetPeople([1,2,3,4]);
    greetPeople([1,2,3,'olá']);
});

