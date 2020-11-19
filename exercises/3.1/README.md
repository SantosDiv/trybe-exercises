![](html-logo.jpeg)
# HTML - Estruturando uma página
O HTML é uma **linguagem de marcação** criada para estruturar a página web. Ela não é uma linguagem de programação. Imagine-a como um esqueleto do corpo humano, onde os músculos, pele, orgãos, serão sustentados e marcados por ela. 

A linguagem HTML tem muitos estruturas de marcação, que denominamos de *TAGs*. São elas que irão definir que será posto naquele espaço. Se vai ser um menu, um corpo, um rodapé, um parágrafo, um título e assim por diante. 

O corpo padrão do HTML é composto por uma **head** (Cabeça da página, onde se encontra as tags que não serão renderizadas pelo navegador e sim apenas lidas para a adição de algum arquivo ou comando) e o **body**, que é o corpo da nossa página. É onde está contido tudo aquilo que vemos no nosso site.

## Exercício 3.1 - Objetivo
Neste exercíco, foi feito uma simples página de estruturação HTML, contendo as tags: 
<ol>
    <li>h1 - Tag hierárquica de títulos (quanto maior o número do H, menor o texto)</li>
    <li>p - Tag de parágrafo</li>
    <li>a - Tag de link</li>
    <li>ul - Tag de lista não ordenada (unordered). Exite a lista ordenada (ordered) - ol</li>
    <li>li - Tag que determina o item da lista</li>
    <li>img - Tag para a adição das imagens</li>
</ol>

## Particularidades de algumas tags
- **Tag img** <br>
    A tag img existem alguns parâmetros que precisam ser passados. Observe: <br>
    `<img src='url ou caminho da imagem' alt='texto alternativo da imagem'>`

    O parâmetro **src** significa *source*, que é busca. É o caminho da sua imagem. Pode ser um link externo ou o caminho do seu diretório local, onde está a sua imagem. O parâmetro **alt** é um texto alternativo para a sua imagem, que é importante para a assebilidade, pra usurários com algum tipo de deficiencia visual e também para os sites de buscas. 

    Pode ser colocado também muitos outros parâmetros nesta tag, como width, heigth, mas vamos nos ater a esses mais importantes agora.

- **Tag a** <br>
    A tag a, que é a tag de link, precisa de um parâmetro chamado **href**, nele é colocado o caminho, para onde você deseja que seu link te leve. Pode ser um link externo (https://google.com.br), ou um diretório local(assets/envia.html).

    `<a href = "urlDapágina ou do Diretório">`

    *Observações*

    Você pode usar no href o 'ID' da sua tag, para que esse seu link leve para uma seção da sua página.

    `<a href = "#IdDaSuaTag">`