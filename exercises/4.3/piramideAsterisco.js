let n = 5, cont = 0, divisor = (n-1)/2;
if( n % 2 != 0) {
  for(let index = 0; index <= (divisor+cont)/2; index += 1) {
    let asterisco = '';
    for(let indexCol = 0; indexCol < n; indexCol += 1) {
        if( ( indexCol >= divisor - cont ) && ( indexCol <= divisor + cont) ) {
          asterisco += '*';
        }else {
          asterisco +=' ';
        }
    }
    cont += 1;
    console.log(asterisco);
  }
}else {
  console.log("Uma pirâmide não pode ser construída com tijolos pares! Coloque um número impar para o n");
}
