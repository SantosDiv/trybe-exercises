import './App.css';
import Pokedex from './Pokedex';
import data from './data';

function App() {
  return (
    <main className='main-container'>
      <h1>Pokedex</h1>
      <section className='pokedex-section'>
        <Pokedex data = { data } />
      </section>
    </main>
  );
}

export default App;
