function createDaysOfWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    }
}
createDaysOfWeek();

function createDaysOfMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const daysContainer = document.querySelector('#days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
        const day = document.createElement('li');
        day.innerText = dezDaysList[index];
        day.className = 'day';

        if ((dezDaysList[index] === 24) || (dezDaysList[index] === 25) || (dezDaysList[index] === 31)) {
            day.classList.add('holiday');
        }
        if ((dezDaysList[index] === 4) || (dezDaysList[index] === 11) || (dezDaysList[index] === 18) || (dezDaysList[index] === 25)) {
            day.classList.add('friday');

        }

        daysContainer.appendChild(day);
    }
}
createDaysOfMonth();

function createButton (nameButton)  {
    let buttonsContainer = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    button.innerHTML = `${nameButton}`;
    button.name = button.value;
    if (nameButton === 'Feriados') {
      button.id = 'btn-holiday';   
    } else {
      button.id = 'btn-friday';
    }

    buttonsContainer.appendChild(button);
}

createButton('Feriados');