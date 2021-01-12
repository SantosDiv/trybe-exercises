const factorial = number => {
  if (number === 0) {
    return 1;
  }
  let response = number;
  while (number > 2) {
    response *= (number -= 1);
  }
  return response;
}

console.log(factorial(5));