let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMaior = 0;
//Solução esclarecida pelo https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
for(let index = 0; index < numbers.length; index += 1) {
  if(numbers[index] > numeroMaior) {
      numeroMaior = numbers[index];
  }
}

console.log(numeroMaior);