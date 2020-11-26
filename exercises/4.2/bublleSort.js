let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 1; index < numbers.length; index += 1) {
    for(let indexSecond = 0; indexSecond < index; indexSecond += 1) {
        if (numbers[index] < numbers[indexSecond]) {
            let position = numbers[index];
            numbers[index] = numbers[indexSecond];
            numbers[indexSecond] = position;
        }
    }
}
console.log(numbers);