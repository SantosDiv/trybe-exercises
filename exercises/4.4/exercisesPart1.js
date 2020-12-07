let informations = {
    persona: 'Diogenes',
    origen: 'Natal',
    note: 'Estudante da Trybe e leitor de tolken',
};

let informations2 = {
    persona: 'Tio Patinhas', 
    origen: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    note: 'O último MacPatinhas',
    recurrent:true,
}
informations.recurrent = true;

console.log(informations.persona, 'e', informations2.persona);
console.log(informations.origen, 'e', informations2.origen);
console.log(informations.note, 'e', informations2.note);
if(informations.recurrent && informations2.recurrent){
    console.log('Ambos recorrentes');
}
// for(key in informations) {
//     console.log(informations[key]);
// } - item 3 e 4
// console.log('Bem vindo,', informations.persona); - item 1
// console.log(informations); - item 2
