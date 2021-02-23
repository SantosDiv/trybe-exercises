import { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.obj;
    return (
      <section className='pokemon-section'>
        <div className='info-pokemon'>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>

        <div className='img-pokemon'>
          <img src={ image } alt='Pokemon' />
        </div>
      </section>
    );
  }
}

export default Pokemon;
