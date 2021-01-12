# JavaScript ES6
O ES6 ou *ECMAScritpt 6*, também chamado de ES2015, nada mais é que uma nova versão do JavaScript que traz algumas atualizações na linguagem JavaScript que auxiliam no desenvolvimento e resolvem alguns problemas na linguagem. 

Com o advento do ES6, o Js pôde se tornar uma linguagem mais robusta, dando a possibilidade de construção de aplicações mais complexas e trazendo uma facilidade de na escrita do código. Tornando-o ainda mais fácil de se contruir bibliotecas e resolveu alguns problemas que existiam na linguagem. 

Nesse bloco, aprenderemos sobre alguns recursos que o ES6 nos possibilitou: *let*, *const*, *arrow functions* e *template literals*.

## Let e Const
Let e const são novas formas de declarar uma variável no javascript. Antigamente era possível utilizar a palavra *var*. Ela basicamente nos falava que ali era uma variável (seja qual for o tipo), e que valia para todo o escopo do nosso código. Ou seja, se eu declarar uma variável pela forma antiga *var*, eu poderia utilizar a minha variável tanto dentro do escopo, quanto fora dela. Além de nos dá a possibilidade de sobrescrever em qualquer lugar do nosso código aquela mesma variável, por qualquer outo tipo. Isso trazia alguns erros e problemas no nosso código. 

Com o ES6, trouxe-nos o let e const. Com eles, da mesma forma podemos 'guardar' qualquer tipo (string, int, boolean), contudo na *const* não me permite fazer a troca de tipo/valor para outro. Ja a *let* me dá essa possibilidade. Com o *let* eu posso torcar tipo/valor da minha variável. Além de que, ambas só funcionam dentro do seu escopo (bloco).

Sempre utilizaremos o const. Como uma boa prática.

Ex.: 
```sh 
    const variable = true;
    variable = false; ## Isso nos retorna um erro. Pois a const não nos permite fazer essa troca. Teríamos que usar o let.
```

Ex 2.:
```sh
    for (let index = 0; index <= 10; inde += 1) {
        console.log(index); ## retorna a interação.
    }
    console.log(index); ## Aqui me retorna um erro porque ela não foi declarada fora do for.
```

## Template Literals
Template literals é também uma atualização do ES6 que nos dá a possibilidade de concatenar strings de uma forma nova e muito mais estável.

Como uso? 
```sh 
    const idade = 27;
    consloe.log(`Minha idade é ${idade} anos.`);
```

Observe que foi utilizado dois parâmetros diferentes para concatenar a variável idade ao meu texto. Antigamente nós utilizávamos as 'aspas' para abrir uma string e então o sinal de '+' para concatenar a o nosso termo a variável. Dessa forma:
>> `console.log('Minha idade é' + idade + ' anos.');`

De forma mais concisa e 'elegante' o **Template Literals** nos permite concaternar com o uso do *${variável}* e o nosso texto entre `crases`. Sem a necessidade do uso do sinal de '+'. Ainda é possível quebrar linhas sem a necessidade do '*\n*', que usávamos no modelo antigo. Veja: 
```sh
    console.log(`Linha 1;
    linha 2;
    linha3;`);

    ## Antes era 
    console.log('linha1;\n' + 'linha2\n' + 'linha3\n');
```

## Arrow Functions
A arrow function é uma forma mais simples de declarar uma função anônima, ou seja, que não necessita de nome para ela.

Assim, nós podemos simplificar a sua declaração e economizar algumas linhas de códigos para a chamada de uma função específica.

Ex.:
```sh
    const dateBirth = () => {
        const value = '24/01/1993';
        return value;
    }
    console.log(dateBirth());
```

Observe que eu chamei a função dentro de uma variável sem precisar colocar o 'function', usando apenas o simbolo '=>' arrow. Por isso arrow function. 

- Quando o retorno dessa função é apenas um valor, no caso acima, eu posso deixar ainda mais simples e chamar: 
`const dateBirth = () => '24/01/1993';`. Isso vai me retornar a data de nascimento.

- Posso usar também o mesmo princípio quando minha função tem uma entrada, sem precisar usar o 'parentese'. Veja:
```sh 
    const interest = number => number*1.5;
    console.log(interest(100));
```

- Se caso a minha função receba mais de um valor, o uso dos parênteses é obrigatório.
```sh
    const price = (value, interest) => value*interest;
    console.log(interest(100,1.5));
```

- Mais um cenário da arrow functions é o retorno de objetos em uma única linha. Veja o exemplo:
```sh
    const objeto = (nome, idade) => ({nome: nome, idade: idade});
    console.log(objeto('Diogenes', 27));
```
Essa arrow function tem uma pequena particularidade pois, quando eu retorno um objeto em uma única linha é preciso encpsular esse objeto em parênteses. Para que ele entenda que quero pegar todo o objeto.