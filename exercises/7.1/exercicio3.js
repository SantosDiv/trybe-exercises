const longestWord = (phrase) => {
  const words = phrase.split(' ');
  let wordsLength = [];
  let biggestWord = '';
  for (let index = 0; index < words.length; index += 1) {
    wordsLength.push(words[index].length);
    
    // Ordena o vetor wordsLength em ordem crescente.
    wordsLength.sort((a,b) => a-b);
    if (wordsLength[index] === words[index].length) {
      biggestWord = words[index];
    }
  }
  return biggestWord;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
