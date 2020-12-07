function maxCharacterName (names) {
  let moreCharacter = 0;
  for(let index = 0; index < names.length; index += 1) {
    if(names[index].length > moreCharacter) {
      moreCharacter = names[index].length;
    }
  }
  for(name of names) {
      if(name.length === moreCharacter) {
          return name;
      }
  }
}

let array =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maxCharacterName(array));