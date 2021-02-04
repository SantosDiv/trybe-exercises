// Desafio 9
function engine(text, action) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  if (action === 'encode') {
    vowels.forEach((vowel, index) => {
      let regex = new RegExp(`${vowel}`, 'g');
      text = text.replace(regex, index + 1);
    });
  } else if (action === 'decode') {
    vowels.forEach((vowel, index) => {
      let regex = new RegExp(`${index + 1}`, 'g');
      text = text.replace(regex, vowel);
    });
  }
  return text;
}

function encode(text) {
  let textEncode = engine(text, 'encode');
  return textEncode;
}

function decode(text) {
  let textDecode = engine(text, 'decode');
  return textDecode;
}

module.exports = { encode, decode };
