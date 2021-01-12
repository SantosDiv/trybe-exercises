const arraySkills = ['JavaScript', 'Git', 'Html', 'Css', 'Figma'];

const concatString = string => {
  arraySkills.sort();
  const intro = `${string}! Minhas cinco principais habilidades são:
    ${arraySkills[0]};
    ${arraySkills[1]};
    ${arraySkills[2]};
    ${arraySkills[3]};
    ${arraySkills[4]};
    #goTrybe
  `;

  return intro;
  
}

const changeWord = phrase => {
  let regex = new RegExp('x', 'g');
  let string = 'Trybe x aqui!';
  let newString = string.replace(regex,phrase);
  return concatString(newString);
}

console.log(changeWord('a mudança é'));