# Testes unitários
A palavra testar no nosso dicionários significa "*Submeter a um teste; pôr a prova, experimentar.*" [fonte](https://www.dicio.com.br/testar/). 

A maioria das coisas em que nos relacionamos foi submetida a um teste. Seu carro, seu computador, celular, sua sandália, seus óculos, sua lente de contato, enfim. Basicamente todo e qualquer produto é submetido a testes para garantir que ele irá se comportar e atender os objetivos para que ele foi criado.

Seguindo esta mesma premissa, um softwere precisa passar por diversos testes para garantir a sua **Confiabilidade**, **Funcionalidade** e **Performace**.

Os **Testes Unitários** são testes automatizados, feitos em cada parte do seu cógigo/cada função, para garantir que cada coisa está funcionando da maneira correta e que o todo não será influenciado mesmo que algo seja alterado em algumas dessas partes. A sua importância é a mesma já explicada anteriormente.

Mas você pode se perguntar: **É realmente necessário?**. Tudo bem meu(minha) pequeno(a) *yoda*, é uma pergunta válida. Escrever mais linhas de códigos para testar minha função é tem apenas poucas linhas parece ser um retrabalho. Mas veja o seu todo. Seu código irá aumentar, em pouco tempo você pode ter muitas funções que não será possível testar manualmente cada uma delas. Você pode trabalhar com códigos prontos, feitos por outro(as) *jadis* e isso fará com que você teste cada função. 

Por isso um teste automatizado é mais eficiente e eficaz. Pois vai lhe garantir que ta tudo sendo feito e que o seu código no final vai estar do lado certo da *força*.

## Vamos começar (Puxe seu sabre de luz)
Vamos utilizar ferramentas de testes baseadas na linguagem JavaScript. Vamos utilizar o módulo `assert` do NodeJs.

Ele é um módulo que retorna `false` se caso alguma parte do teste falha. Caso contrário não retorna nada.

### Usando o `assert`
Para usar temos que chamar alguns métodos dele, depois de importar o próprio assert. Ele é um módulo do nodeJs, logo você precisa instalar o node para isso.

- assert.strictEqual() - Valor estritamente igual;
- assert.deepStrictEqual() - Objeto/array estritamente igual;
- assert.notStrictEqual() - Valor não igual;
- assert.ok();
- assert.fail();

Entre outros métodos;

Funcionamento:
```sh 
    const assert = require('assert') # incluindo o módulo
    assert.strictEqual(valorQueVaiEntra, ValorQueQueroQueSejaIgual, 'Mensagem - (Opcional)')
```
O que o código acima verifica?
O método `strictEqual` verifica se o valorQueEntra é `===` ao valor que quero comparar. Se for verdadeiro ele não me retorna nada, se for falso me retorna um erro.

**Exemplo**: 
```sh
    const assert = require('assert');
    assert.strictEqual(10,10) # Compare: 10 === 10? True
    assert.strictEqual(20,50) # Compare: 20 === 50? False - mensagem de erro;
```
> Veja que ele compara o tipo e valor. Se fosse só o assert.equal() é uma comparação '==' que é uma forma depreciada de fazer.

### o uso do Throw (Exceções)
Quando estamos fazendo a verificação, há casos que precisamos indicar algumas exceções (erros). Por exemplo, garantir que uma função que recebe apenas string, não venha a receber números. Para isso usamos o `assert.throw`. 

Ele recebe dois parâmetros: Um bloco de função e uma menssagem. Veja um exemplo:

```sh
    const nome = (name) => `seu nome é: ${name}`;
```
Veja que essa *arrow function* me retorna apenas uma string e que tem por parâmetro de entrada também uma string. Mas imagine que alguém coloca um número como parâmetro de entrada, deveria me retornar um erro certo? Para isso temos as exceções com o `throw`. Ficaria assim:

```sh 
    const setName = (name) => {
        if(typeOf(name) !== 'string') {
            throw 'Não podemos receber valores diferentes de string';
        }
        return `seu nome é: ${name}`
    };

    assert.throw(()=> {
        setName(18);
        setName({});
        setName([]);
    });
```
Observe que estou colocando algumas regras de que não posso passar número, objeto ou array como parâmetro de entrada. Caso eu faça isso, eu entro na exceção (Throw) com essa mensagem.

## O TDD e suas vantagens
TDD (Test Driven Development) é uma forma de programar embasado em testes. Ou seja, nós vamos testando antes de ter as coisas implementadas.

Qual a vantagem disso? Temos um código 100% testado. (em tese); Veja: 
```sh 
    const assert = require('assert');
    assert.strictEqual(typeof myFunction, 'function');
```