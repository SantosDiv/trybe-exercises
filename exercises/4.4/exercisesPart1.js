let informations = {
    persona: 'Diogenes',
    origen: 'Natal',
    note: 'Estudante da Trybe e leitor de tolken',
};

informations.recurrent = 'yes';

for(key in informations) {
    console.log(informations[key]);
}
// console.log('Bem vindo,', informations.persona); - item 1
// console.log(informations); - item 2
