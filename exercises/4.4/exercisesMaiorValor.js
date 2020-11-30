function indexMaxValue (values) {
  let maxNumber = 0;
  for(let index = 0; index < values.length; index += 1) {
    if(values[index] > maxNumber) {
        maxNumber = values[index];
    }
  }
  for(key in values) {
      if(values[key] === maxNumber) {
          return key;
      }
  }
}
let array = [2, 3, 6, 7, 10, 1];
console.log(indexMaxValue(array));