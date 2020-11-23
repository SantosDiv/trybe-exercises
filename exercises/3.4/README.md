# Html - semântica
A semântica de um código HTML é tão importante quanto a estilização do mesmo. A semântica seria a 'escrita' do código corretamente direcionada. No HTML existem TAGs que são conhecidas como *semanticas*, podemos elencar dentre muitas as seguintes: `header`, `article`, `section`, `main`,`h1, h2., h3...`, `ul, ol`, entre muitas outras. 

Mas o que isso muda em si? Bom, visualmente nada. Mas a nível de leitura do código e boa estruturação de hierarquias, muda tudo. Além de melhorar o rankeamento do seu site nos sites de buscas, que levam em consideração o correto uso das tags para o seu fim correto.

## Exemplo: 
Observe o seguinte exemplo:
```sh 
    <main>
        <article> 
            <h1> Título</h1>
        </article>
    </main>
```
Veja que o main é pai do article, e o article é pai do H1. Na nossa **DOM** essas hierarquias serão melhor respeitadas e ajudarão nos sites de buscas e muito mais na assessibilidade do nosso site. 
Por isso é importante Nos atentarmos com a semântica do nosso código. 

## Sobre o exercício
Neste exercício foi criado uma pequena página de notícia, falando do animal Stomatopoda, utilizando a semântica correta para cada elemento da página. Obedecendo as suas finalidades e objetivos. 