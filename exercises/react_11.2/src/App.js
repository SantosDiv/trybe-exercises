import './App.css';
import Pokedex from './Pokedex';
import data from './data';

function App() {
  return (
    <section>
      <h1>Pokedex</h1>
      <Pokedex data = {data}/>
    </section>
  );
}

export default App;
