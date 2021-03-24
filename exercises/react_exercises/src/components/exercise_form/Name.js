import React from 'react';

class Name extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        let error = undefined;
        if (value.length > 40) error = 'Nome acima de 40 letras. Por favor diminua.';
        return(
            <label>
                Digite o seu nome
                <input type='text' name='name' value={ value.toUpperCase() } onChange={handleChange}/>
                <span>{error ? error : ''}</span>
            </label>
        )
    }
}

export default Name;