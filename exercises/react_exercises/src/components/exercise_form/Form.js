import React from 'react';
import Name from './Name';
import Email from './Email';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: '',
            email: ''
        }
    }

    handleChange({ target }) {
        const { name, value } = target;
        this.setState({
            [name]: value,
        })
    }

    render() {
        return(
            <form>
                <fieldset name='personals-data'>
                    <legend>Dados Pessoais</legend>
                    <Name value={this.state.name} handleChange={this.handleChange} />
                    <Email value={this.state.email} handleChange={this.handleChange} />
                </fieldset>
            </form>
        )
    }
}

export default Form;