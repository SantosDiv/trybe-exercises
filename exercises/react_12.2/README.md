# React - Formulário
Vamos trabalhar com os formulários. Algo muito importante e indispensável para o front-end. Vemos entender como se comporta e como manipular esses formulários utilizando o React.

## Componentes Controlados
Primeiro vamos partir do que é um componente controlado. Não podemos confundir componentes controlados com os componentes do React em si. Estes componentes controlados, são campos do formulários que são controlados pelo React, não mais tem sua 'autonomia'. Veja:

`<input type="text" name="nome"/> ` - Este é um campo input, que quando digitamos o valor é guradado de forma provisória em algum lugar da nossa DOM. Por isso podemos acessar este valor digitado pelo comando: `input.value`. Correto? Sim! Está correto, quando falamos de JavaScript puro. Assim podemos dizer que esse componente não é controlado, ele tem a autonomia de guardar o seu valor. O que vamos fazer agora é manipular ele com o React, para que através do react possamos tranforma-lo em componente controlado. Observe:

Imagine esse pequeno formulário:
```html
    <form class='form'>
        <label>
            Digite seu nome:
            <input type= "text" name="nome">
        </label>
        <label>
            Estado civil
            <select>
                <option> Solteiro(a) </option>
                <option> Casado(a) </option>
                <option> Prefiro não dizer </option>
            </select>
        </label>
        <label>
            Mensagem
            <textarea name="mensagem" />
        </label>
    </form>
```
Temos ai um formulário comum, em puro html, no qual os seus campos(componentes) não são controlados. Pois bem, vamos fazer com que um destes campos sejam controlados. Usando o Estado.

```js
    import 'React' from 'react';
    import './Form.css';

    class Form extends React.Component {
        constructor(props) {
            super(props);

            this.handleChange = this.handleChange.bind(this);

            this.state = {
                nome: '',
                estadoCivil: '',
                mensagem: '',
            }
        }

        handleChange(event) {
            this.setState({
                nome: event.target.value,
            });
        }

        render() {
            return (
                <div>
                    <form class='form'>
                        <label>
                            Digite seu nome:
                            <input type= "text" name="nome" value = {this.state.nome} onChange={this.handleChange}>
                        </label>
                        <label>
                            Estado civil
                            <select>
                                <option> Solteiro(a) </option>
                                <option> Casado(a) </option>
                                <option> Prefiro não dizer </option>
                            </select>
                        </label>
                        <label>
                            Mensagem
                            <textarea name="mensagem" />
                        </label>
                    </form>
                </div>
            )
        }
    }
```

Prontinho. Agora, se observarmos, o valor que é digitado no campo `nome` vai ser guardado no Estado `nome`, que eu criei para o meu componente Form. Que por sua vez, eu estou retornando este valor para o campo `value` do meu input. Assim tornando o meu input um **Componente Controlado**.

## Aplicando o Handle para todos os campos
Nós aplicamos o handle para um campo, agora como ficaria para todos? Eu teria que criar vários handlers? Não! Nós podemos usar algo que chamamos de `Event Handler`. Que vai ser uma única função hanlder que vai servir todos os campos. Veja

```js
import 'React' from 'react';
    import './Form.css';

    class Form extends React.Component {
        constructor(props) {
            super(props);

            this.handleChange = this.handleChange.bind(this);

            this.state = {
                nome: '',
                estadoCivil: '',
                mensagem: '',
            }
        }

        handleChange({ target }) {
            const { name } = target;
            const value = target.type === 'checkbox' ? target.checkbox : target.value;
            this.setState({
                [name]: value,
            });
        }

        render() {
            return (
                <div>
                    <form class='form'>
                        <label>
                            Digite seu nome:
                            <input type= "text" name="nome" value = {this.state.nome} onChange={this.handleChange}>
                        </label>
                        <label>
                            Estado civil
                            <select name='esatadoCivil' value = {this.state.stadoCivil} onChange={this.handleChange}>
                                <option value="solteiro(a)"> Solteiro(a) </option>
                                <option value="casado(a)"> Casado(a) </option>
                                <option value="Prefiro não dizer"> Prefiro não dizer </option>
                            </select>
                        </label>
                        <label>
                            Mensagem
                            <textarea name="mensagem" value={this.state.mensagem} onChange={this.handleChange}/>
                        </label>
                    </form>
                </div>
            )
        }
    }
```
Observe as seguintes mudanças. Eu descontruí o objeto `event` e peguei só o target. Então deste objeto eu peguei primeiro só o `name` e depois fiz uma pequena verificação, se caso o tipo do campo for `checkbox`, eu tenho que pegar o valor do campo `checkbox`, do contrário eu pego do campo `value`.

Então foi feito uma interpolação, dentro do `setState`, onde no lugar do nome, eu coloquei a variável `name`. Logo quando eu fizer uma alteração, o meu estado, que tem o mesmo nome dos meus campos, vai ser alterado com o valor correspondente a ele. Sem precisar assim de criar um Handler para cada campo. Deixando o nosso código mais limpo e dinâmico.