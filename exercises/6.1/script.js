// Get elements
function getElements() {
  const nameInput = document.querySelector('#name-input');
  const emailInput = document.querySelector('#email-input');
  const cpfInput = document.querySelector('#cpf-input');
  const enderecoInput = document.querySelector('#endereco-input');
  const cidadeInput = document.querySelector('#cidade-input');
  const dropdownState = document.querySelector('#dropdown-state');
  const typeHouse1 = document.querySelector('#type-1');
  const typeHouse2 = document.querySelector('#type-2');
  const resumeCurriculum = document.querySelector('#resume-curriculum');
  const cargoInput = document.querySelector('#cargo-input');
  const description = document.querySelector('#description');
  const dataInicioInput = document.querySelector('#dataInicio-input');
  
  const dataObject = {
      name: nameInput.value,
      email: emailInput.value,
      cpf: cpfInput.value,
      endereco: enderecoInput.value,
      cidade: cidadeInput.value,
      state: stateInput.value,
      typeHouse: typeHouse.value,
      resume: resumeCurriculum.value,
      cargo: cargoInput.value,
      description: description.value,
      date: dataInicioInput.value,
  }
  return dataObject;
}

// Fill dropDown
function fillDropDownState() {
  const states = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ];
}

window.onload = function () {
  const buttonSend = document.querySelector("#send");
  const yearActual = new Date().getFullYear(); 
  var picker = new Pikaday({ 
    field: document.getElementById('datepicker'),
    format: 'D/MM/YYYY',
    toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    },
    yearRange: [1900, yearActual]
  });
  fillDropDownState();
  buttonSend.addEventListener("click", function (event) {
    event.preventDefault();
    // getElements();
  }, false);
};
