import React from 'react';

class Email extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        let error = undefined;
        if (value.length > 40) error = 'email muito grande. Por favor diminua.';
        return(
            <label>
                Digite o seu Email
                <input type='email' name='email' value={ value } onChange={handleChange}/>
                <span>{error ? error : ''}</span>
            </label>
        )
    }
}

export default Email;