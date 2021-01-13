# JavaScript ES6 - Objects
Segundo a documentação do [w3schools](http://www.w3schools.com), objectos são "containers que guardam valores dentro de uma respectiva propriedade ou método". Podemos chamar essa propiredade de **Key** e que guarda um valor nela. Por isso temos uma realção de objecto chamada *chave-valor*.

Aqui nós vamos nos ater a algumas funções que nos dará 'poderes' para acessar, adicionar ou alterar essas chaves e/ou valores.

## Object.keys
A função *Object.keys*, nos retorna a lista todas as chaves do objeto que passamos por parâmetro. Mas antes de ver esse método propriamente dito, vamos entender um pouco sobre a manipulação dos objetos em JavaScript.
Veja um exemplo: 
```sh 
    const profile = {
      firstName: 'Diogenes',
      age: 20,
      dateBirth = '05/05/2000'
    }
```
Aqui temos esse objeto e numa situação que seria necessário adcionar o meu sobrenome neste objeto. A primeira reação talvez seria digitar novamente o objeto, mas temos uma forma muito mais simples para isso. Veja:
```sh
    # Forma 1 de adicionar
    profile.lastName = 'Santos';

    #Forma 2 de adcionar
    profile['lastName'] = 'Santos';
```
Veja como foi feito. Eu acessei o meu objeto, disse para ele qual a chave queria adcionar (neste caso o lastName) e o valor dessa minha chave. Isso economiza tempo e 'linhas de código'.

> Um ponto de atenção é que somente na forma 2 é possível colocar uma variável no lugar da chave. Veja:
```sh 
    const nameKey = 'lastName';
    profile[nameKey] = 'Santos';
```
Entendido como manipulamos os nossos objetos, vamos entender como o método Object.keys funciona, ainda usando o mesmo objeto acima. Eu quero agora listar todas as chaves do meu objeto, e adicionar no texto: "Meus dados: Nome: nome, Sobrenome: sobrenome, idade: idade e data de Nascimento: datadeNascimento";
```sh 
    const profile = {
      firstName: 'Diogenes',
      secondName: 'Santos',
      age: 20,
      dateBirth: '05/05/2000',
      fullName: function () {
        return `${this.firstName} ${this.secondName}`;
      },
    }
    profile['lastName'] = 'Santos';

    const showText = (object) => {
      const vectorKeys = Object.keys(object);
      vectorKeys.forEach((key)=>{
        console.log(`${key}: ${object[key]};`)
      });
    }

    showText(profile);
```
Perceba que eu usei uma função dentro de uma propriedade chamada `fullname`. Isso é o que chamamos de *Properties Constructor*, ou construtor de propriedade. É uma forma criar uma propriedade no objeto utilizando parâmetros do proprio objeto. Basta acessar este objeto com o método `this`. O *This* referência o próprio objeto em questão. (OBS.: Isso pode ser feito não só em objetos);
Mas para mostrar o nosso `fullname`, por ser uma função, eu preciso chama-la. 

```sh 
    # Chamando uma propriedade que é uma função;
    profile.fullname();
    # Basta eu colocar os parênteses, que vai me retornar o valor final da função.
```
## Object.values
De forma análoga ao anterior, ele vai te retornar uma lista. A diferença é que será a lista dos valores das propriedades/chaves. 

Para acessar essa função é tão simples quanto a outra, basta apenas:

```sh
    const profile = {
      firstName: 'Diogenes',
      secondName: 'Santos',
      age: 20,
      dateBirth: '05/05/2000',
      fullName: function () {
        return `${this.firstName} ${this.secondName}`;
      },
    }
    console.log(object.values(profile));
    # output
    #['Diogenes', 'Santos', '20', '05/05/2000', 'function () {
        #return `${this.firstName} ${this.secondName}`;
      #}']
```
Observe que a saída foi de todos os valores, inclusive o que estava dentro da chave `fullName`. Não foi retornado o nome completo, pois não foi chamada a função e sim  o valor da chave.

## Object.entries
Este método retorna também uma lista/array. Contudo contêm nele a lista do conjunto chave/valor em cada posição. Exemplo:
```sh
    const profile = {
      firstName: 'Diogenes',
      secondName: 'Santos',
      age: 20,
      dateBirth: '05/05/2000',
      fullName: function () {
        return `${this.firstName} ${this.secondName}`;
      },
    }
    console.log(profile)
```
A saída será dessa forma. **Exemplo em Tabela para melhor entendimento do chave/valor por posição**

index     | 0          |1
--------- | ------     | -------
1         | firstName  | 'Diogenes'
2         | secondName | 'Santos' 
3         | age        | 20
4         | dateBirth  | '05/05/2000'
5         | fullname   | function () {return `${this.firstName} ${this.secondName}`;}

- Para que eu possa acessar as chaves/valor posso fazer: 
```sh 
    const keyValues = object.entries(profile);
    keyValues.forEach((keyValue) => {
        console.log('Chave', keyValues[keyValue][0]);
        console.log('Valor', keyValues[keyValue][1]);
    });
```

## Object.assign
O método **Object.assign** serve para basicamente copiar os valores de um objeto **origem** para outro objeto **destino**.

O que basicamente acontece? Ele cria um novo objeto, com a junção dos dois objetos (Origem e Destino).

Temos algumas situações distintas, vamos tentar descrever algumas que acontecem aqui. 

* Clonando o objeto Origem
```sh 
  const profile = {name: 'Diogenes'}; # Origem
  const destinyObject = {};
  Object.assign(destinyObject, profile);
```
Dessa forma eu to criando um objeto vazio e colocando nele todas as propriedades que estão no meu objeto profile.

* Copiando e sob escrevendo propriedades já existentes
Caso o meu objeto destino tenha uma propriedade com o mesmo nome do meu objeto origem, o valor dessa propriedade vai ser sobescrita pelo valor do meu objeto origem.
```sh 
  const profile = {name: 'Diogenes'}; # Origem
  const destinyObject = {name: 'Felipe'};
  console.log(Object.assign(destinyObject, profile));

  # Output
  # {name: "Diogenes"} - o name do meu objeto destinyObject foi sobescrito
```

