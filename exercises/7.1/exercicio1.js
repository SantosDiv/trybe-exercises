// Testando Escopo
const testingScope = (escopo) => {
  if (escopo) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    return `${ifScope}. Ótimo, fui utilizada no escopo !`;
  }
  let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
  return `${elseScope}`;
}
console.log(testingScope(false));

// Ordenando numeros
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a,b)=> a-b);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);