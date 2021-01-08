# Media Querys
Os **medias-querys** são pontos de quebras utilizadas para controlarmos a execução de um determinado trecho de código *css*, para diferentes dispositivos de tela. Com isso, podemos criar os famosos *designs responsivos*. Uma das formas de tornar o nosso site adaptável a vários tipos de dispositivos (Tablet, Desktop, Smartphone...).

## Sintaxe
```sh
    @media screen and (min-width: 768px) {
        .header {
            background: red;
        }
    }
```
O parâmetro *'@media'* é a chamada do media-querie, em segundo vem o tipo de tela *screen*. Temos alguns tipos: screen, print.. entre outros. Logo depois temos o operador lógico que queremos adicionar, *and* é um exemplo deles. E por fim o nosso parâmetro de condição, onde, no exemplo acima, mostra que quando a largura da minha tela tiver no mínimo 768px, o backgroundo do meu header vai ficar vermelho. 

Assim podemos controlar toda a nossa página e colocar quantos pontos de quebras acharmos necessários.

## Media Query no HTML
Existe a possibilidade de utilizarmos o parâmetro *media* na propria tag HTML, quando chamamos o nosso CSS que contêm as mudanças que desejamos. Veja:
```sh
    <link rel="stylesheet" href="style.css">
    <link rel='stylesheet' href='stilo-com-mudanças-pontuais' media='screen and (min-width: 768px)'>
```

Veja que primeiro eu chamei o meu CSS, com todo o estilo da minha página, e em baixo chamo o css que contêm as mudanças que quero que sobrescreva apenas, e somente apenas, quando a largura da minha tela seja pelo menos 768px.