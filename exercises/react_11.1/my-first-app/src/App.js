import './App.css';
import List from './listComponent';

const tasks = ['Fazer exercicios', 'Fazer caminhada', 'Lavar roupa', 'ligar para amigos'];

// Poderia criar a função que gera os <li> aqui e depois setar no meu App, mas preferi
// criar um componente chamado List e usar o props.

// const list = (tasks) => tasks.map(taks => <li key = {task}> { task } </li>);

function App() {
  // Aqui eu utilizei o o props, para passar uma parâmetro dentro do meu componente.
  return <List tasks = {tasks}/>;
}

export default App;