function indexMaxValue (values) {
  let minNumber = values[0];
  for(let index = 0; index < values.length; index += 1) {
    if(values[index] < minNumber) {
        minNumber = values[index];
    }
  }
  for(key in values) {
      if(values[key] === minNumber) {
          return key;
      }
  }
}
let array = [2, 3, 6, 7, 10, 12];
console.log(indexMaxValue(array));