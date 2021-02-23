import { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    return this.props.data.map(pokemonObj => <Pokemon obj = {pokemonObj} key= {pokemonObj.id} />);
  }
}

export default Pokedex;