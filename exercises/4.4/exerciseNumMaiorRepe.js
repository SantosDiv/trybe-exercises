// Desafio 6
function highestCount(arrayNumbers) {
    let arrayOrdenad = arrayNumbers.sort(compareNumbers);
    let numberMax = arrayOrdenad.length - 1;
    let cont = 0;
    for(let index = 0; index < arrayOrdenad.length; index += 1 ) {
      if(arrayOrdenad[index] === arrayOrdenad[numberMax]) {
        cont += 1;
      }
    }
    return cont;
  }
  
  function compareNumbers(a, b) {
    return a - b;
  }

  let array = [9, 1, 2, 3, 9, 2, 7];
  console.log(highestCount(array));