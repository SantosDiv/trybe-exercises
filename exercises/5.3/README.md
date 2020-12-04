# JavaScript - Eventos
Toda a página web é carregada de eventos que podemos 'escutar' usando o javascript. Desde o carregamento da página, que são os eventos disparados pelo navegador (DOM on-event handlers) ou os eventos feitos pelo usuário, um clique de botão, uma tecla, etc.. (Inline event handlers).

## DOM on-event handlers
Esses são os eventos feitos pelo próprio navegador. Como vimos anteriormente, a navegador lê uma coisa chamada DOM (Document Object Model), que nada mais é que a nossa árvore de elementos, ou no nosso HTML. O nosso navegador dispara alguns eventos que nós, como programadores, podemos pegar-los para realizar alguma ação em nosso site. Exemplo: *`window.onload`*, evento que é disparado quando a página é carregada. 

Alguns exemplos de on-event handlers: `window.onhashchange`, `window.onkeyup`. ![Veja mais](https://developer.mozilla.org/pt-BR/docs/Web/API/Window);

Em uso: 

```sh 
    window.onload = paginacarregada();
    paginacarregada () {
        alert('A página foi carregada');
    }
```

## Inline event handlers
Aqui são os eventos em que o usuário interage com a nossa página. Quando ele clica em um botão, quando ele dá um scrrol na barra de rolagem, ou até mesmo quando ele tecla algo. Nós, com o JavaSript, podemos pegar esses eventos disparados e utiliza-los para alguma ação. 

Temos muitos exemplos de eventos do tipo: `onclick`, `onkeyup`, `onscroll`. ![Veja Mais](https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onclick)

Em uso: 

```sh 
    <button onclick="botãoClicado()" value="Ação">

    botãoClicado(){
        alert("Este botão foi clicado");
    }
```

## AddEventListener (O escutador de eventos)
Com ele é possível escutar o evento do nosso usuário e assim não sendo preciso colocar funções dentro dos nossos objetos. Assim me dá mais dinamismo na minha página, pois assim não preciso necessáriamente criar o meu objeto no meu arquivo html, mas também no meu js. 

São muitos eventos: `click`, `dbclick`, `mousover`, `scroll`, `key`, `input`. ![Veja Mais](https://www.w3schools.com/jsref/dom_obj_event.asp).

Em uso: 

```sh 
    <button id="btn" value="Ação">

    let button = document.querySelector('#btn');
    button.addEventListener('click', function (){
        alert("Botão clicado");
    });
```

