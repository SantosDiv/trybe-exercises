# JavaScript - Web Storage
Imagine você precisar pegar uma informação que está em uma planilha em outro estado. Difícil não é mesmo? Agora imagine você ter essas informações guradada numa gaveta, embaixo da sua mesa. Pois bem, os armazenamentos (storages) do nosso browser essas gavetas para nós. As chamamos de *Web Storage*. 
Basicamente, são locais em que o nosso navegador guarda informações simples, que poderão ser utilizadas posteriormente, sem que seja necessário uma requisição (no caso do localStorage e do SessionStorage) ao nosso servidor para buscar este dado. 
Por exemplo, quando você entra numa página de passagem aérea e lá já tem o seu nome salvo, ou um vídeo que já inicia onde você tinha parado. Você está usando os armazenamentos do seu navegador para isso. 

## Cookies 
Os cookies é um dos tipos simples de armazenamentos, podendo armazenar pequenas quantidades de textos. Uma prefrência de idioma, cor, por exemplo. Atualmente existem alguma políticas de uso dos cookies que é bom conferirmos sempre quando acessamos um site. Pois nele será gravado as nossas preferências durante a nossa estadia neste site. Quando retornarmos a ele, estará salvo algumas pesquisas, desejos. Quando queremos alguns dados que estão no lado do cliente e do servidor, usamos o cookie.

Eles tem validades e atualmente é necessário também colocar um novo parâmetro de segurança na declaração dos cookies (`securie`); ![Veja mais aqui sobre os atributos SameSite](https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie/SameSite);

- Declarando um cookie
Um cookie tem uma declaração simples de **chave-valor**, nela nós indicamos o nome e o valor do cookie. Podemos adicionar alguns outros parâmetros na declaração do cookie também, como validade, SamSite (secure) entre outros.
```sh 
    #Chamada com o parametro secure
    document.cookie = 'natal=niverDeJesus; secure';
```

```sh 
    #Guradando numa variável
    document.cookie = 'natal=niverDeJesus; secure';
    const myCookie = document.cookie;
    console.log(myCookie) # Saida: natal=niverDeJesus; secure
```

```sh 
    #Chamada com data de validade do cookie
    document.cookie = 'natal=niverDeJesus; expires=Fri, 25 Dec 2020 12:00:00 UTC';
```

```sh 
    #Chamada com o parametro securie
    document.cookie = 'natal=niverDeJesus; secure';
```
## LocalStorage
O localStorage nos permiter salvar dados no nosso browser, de forma local (como o nome intuitivamente nos mostra). Ou seja, quando fechamos o nosso browser o valor não se perde, pois fica armazenado no nosso browser. É bem mais simples de utilizar que o cookie, e podemos armazernar um pouco mais de dados.

Ele funciona armazenando de forma **key-valor**. Ou seja, nós declaramos uma chave e valor dele, semelhantemente ao cookie, só que de forma diferenciada. 

- Declarando um localstorage
```sh 
    # Setando itens dentro do meu localStorage
    const client = localStorage.setItem('name', 'Diogenes');
    const order = localStorage.setItem('order', 'pizza');

    #Quantidade de entradas no meu localStorage
    localStorage.length # Retorna o numero 2 (teve duas entradas - client e order)
```