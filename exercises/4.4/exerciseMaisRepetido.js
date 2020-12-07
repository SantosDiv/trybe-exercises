function moreRepeat (numbers) {
  let numbersRepeat = [];
  for(let index = 0; index < numbers.length; index += 1) {
    let cont = 0;
    for(let indexNumber = 0; indexNumber < numbers.length; indexNumber += 1){
      if(numbers[indexNumber] === numbers[index]){
        cont += 1;
      }
    }
    numbersRepeat.push(cont);
  }
  return numbersRepeat;
}

let array =  [2, 3, 2, 5, 8, 2, 3];
console.log(moreRepeat(array));