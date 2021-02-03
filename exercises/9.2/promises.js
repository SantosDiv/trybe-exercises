const fetch = require('node-fetch');

// Exemplo usando uma API e fazendo a 'busca' com o método fetch sem Async
/*
function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === "https://api.chucknorris.io/jokes/random?category=dev") {
      fetch(url)
        .then((response) => response.json())
        .then((response) => resolve(response.value));
    } else {
      reject('Não deu!');
    }
  });
}

function sendJokeToFriend(name) {
  verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => console.log(`Oi ${name}, ouve essa: ${joke}`))
    .catch((err) => console.log(err));
    console.log('Requisitando a API...');
}*/


// Exemplo usando uma API e fazendo a 'busca' com o método fetch sem Async
function verifiedFetch(url) {
  if (url === "https://api.chucknorris.io/jokes/random?category=dev") {
    return fetch(url)
      .then((response) => response.json())
      .then((response) => response.value);
  }
  throw new Error("endpoint não existe");
}

async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");

/*

Exemplo usando constructor de promises - new Promise()

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
  .then(number => `Que sucesso =) nosso número foi ${number}`)
  .then(msg => console.log(msg))
  .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));
*/
