import { Component } from 'react';

class List extends Component {
  render() {
    // Aqui eu pego a props com o nome 'tasks' que neste caso é um array e faço a operação que desejo
    return this.props.tasks.map(task => <li key= {task}> {task} </li>);
  }
}

export default List;