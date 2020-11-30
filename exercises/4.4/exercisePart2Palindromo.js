function palindrome (word) {
  let length = (word.length) - 1;
  let palindrome;
  for(let index = 0; index <= length; index += 1) {
    if(word[index] === word[length-index]){
        palindrome = true;
    }else {
        palindrome = false;
    }
  }

  if(palindrome) {
      return true;
  }else {
      return false;
  }
}

console.log(palindrome('desenvolvimento'));
