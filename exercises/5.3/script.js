window.onload = function () {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let buttonsContainer = document.querySelector('.buttons-container');
    createDaysOfWeek();
    createDaysOfMonth(dezDaysList);
    createButton('Feriados', buttonsContainer);
    createButton('Sexta-Feira', buttonsContainer);
}

// Create days of week
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

//Creat days of month
function createDaysOfMonth(daysOfMonth) {
    const daysContainer = document.querySelector('#days');
    for (let index = 0; index < daysOfMonth.length; index += 1) {
        const day = document.createElement('li');
        day.innerText = daysOfMonth[index];
        day.className = 'day';

        if ((daysOfMonth[index] === 24) || (daysOfMonth[index] === 25) || (daysOfMonth[index] === 31)) {
            day.classList.add('holiday');
        }
        if ((daysOfMonth[index] === 4) || (daysOfMonth[index] === 11) || (daysOfMonth[index] === 18) || (daysOfMonth[index] === 25)) {
            day.classList.add('friday');

        }
        day.addEventListener('mouseover', zoomInTextDay);
        day.addEventListener('mouseout', zoomOutTextDay);
        daysContainer.appendChild(day);
    }
}

//Create button generic
function createButton (nameButton, locationButton)  {
    let button = document.createElement('button');
    button.innerHTML = `${nameButton}`;
    button.name = button.value;
    if (nameButton === 'Feriados') {
      button.id = 'btn-holiday'; 
      addEventOfButtonHoliday(button);  
    } else {
      button.id = 'btn-friday';
      addEventOfButtonFriday(button);
    }
    locationButton.appendChild(button);
}

//Add event click of button Holiday
function addEventOfButtonHoliday (button) {
  let holidays = document.querySelectorAll('.holiday');
  button.addEventListener('click', function (){
    holidays.forEach(holiday => {
      holiday.classList.toggle('selectionColorHolidays');
    });
  });
}

function addEventOfButtonFriday (button) {
  let fridays = document.querySelectorAll('.friday');
  let dayFridayText = [4,11,18,25];
  button.addEventListener('click', function (){
    for (let index = 0; index < fridays.length; index += 1) {
      if(fridays[index].innerText !== 'SEXTOUU!!') {
        fridays[index].innerText = 'SEXTOUU!!';
      }else {
        fridays[index].innerText = dayFridayText[index];
      }
    }
  });
}

function zoomInTextDay (event) {
  event.target.style.transform = 'scale(2)';
}

function zoomOutTextDay (event) {
  event.target.style.transform= 'scale(1)';
}
