![](github_logo.png)
# Git & Github - O que é e para que serve?
**Git** "é um controle de versão distribuído(VCD), que foi desenvolvido com o intuito de facilitar o gerenciamento de versões de arquivos" (*Eduardo Espinula - Devmedia*);

Ele foi criado pelo Linus Torvalds, durante a criação do próprio Linux. Este VCD guarda um conjunto de alterações do seu arquivo denominado de *commits*. Este por sua vez, é armazenado como um histórico dentro do seu repositório versionado, que possibilita gerenciar e acessar as diferentes versões do seu projeto.

O Git te ajuda a trabalhar em equipe pois ele te possibilita ter várias estações de trabalho trabalhando no mesmo arquivo, ao mesmo tempo. Assim o fluxo de trabalho para desenvolvimento de softwere, texto, entre outros, fica extremamente fácil e muito mais acertivo. Sem a infame necessidade de envio dos arquivos em .zip por email com o título: *versao1, versao2, versao-final*.

**GitHub** é o repositório remoto que guarda essas diferentes versões de projetos, com seus respectivos commits, quais as *branchs* que estão criadas e quais os profissionais estão trabalhando nelas. Com este repositório remoto, fica fácil compartilhar trabalhos por todo o mundo, e gerenciar alterações, mesmo que sejam mínimas nos seus arquivos. 

## Mas o que são branchs? Merge? Commits? Push? Pull? Pull Request?

### Branchs
Imagine uma árvore, que tem um troco forte e firme. Esta árvore contêm seus galhos que estão ligados a este tronco. Pois bem, uma branch é similar a isso. É uma ramificação do seu projeto principal. Basicamente, elas servem para que toda e qualquer alteração seja feita fora do "tronco principal" (o projeto que será posto no ar), e assim diminuindo o risco de comprometer todo um sistema.

Podemos ter uma "branch" de features/updates ou bugs-resolve. Cada profissional poderá criar uma branch para si, onde nela conterá uma cópia do projeto principal e então poderá ser feita as devidas alterações.

### Commits
Como falado anteriormente, os commits são as pequenas atualizações dos arquivos, que precisam ser versionadas.

#### Fazendo um Commit
`git commit -m "Mensagem que identifica o commit"`

#### Fazendo um commit e uma adição

Toda vez que criamos uma alteração no nosso arquivo, precisamos adicionar este arquivo em um campo chamado *Stage*. Que basicamente é onde ele estaria pronto para ser 'commitado'. Basta realizar o comando `git add nomeDoAruqivo` ou `git add .` (Para adicionar todas as mudanças de uma vez)

`git commit -am "Mensagem que identifica o commit"` - Com esse comando, podemos commitar e adcionar ao mesmo tempo. Atenção: Só pode fazer este comando após termos adicionado o arquivo uma primeira vez na forma anterior.

### Git Push
Traduzindo literalmente, o *push* é uma ação de empurrar o código commitado pra o repositório remoto. Todas as alterações, de adição ou exclusão feita no seu repositório local, será 'empurrada' para o seu repositório remoto. 

#### Fazendo um Push
`git push -u origin NomeDaBranch` - O primeiro push na branch deve ser feito dessa forma. Os demais pode ser usado só o `git push`;



### Git Pull
O *pull* faz o contrário do push. Ele traz para o seu repositório local, todas as atualizações do seu projeto que está no repositório remoto. Ele faz dois procedimentos automáticos: *fetch + merge*. Ele verifica se tem commits anteriores e em seguida une as atualizações a sua versão atual, deixando ela atualizada. 

#### Fazendo um pull 
`git pull origin nomeDaBranch`

### Git Merge
Se você for fã de quadrinhos como eu vai se lembrar da fusão de Gothen e Tranks. Pois bem, o merge é a mesma coisa. Ele 'funde' as *branchs* ao projeto principal. Fazendo assim um único projeto. Normalmente uma Merge é realizada depois de alguns Pull Requestes e de Codes Reviews. 

#### Fazendo uma merge
`git merge nomeDaBranchPrincipal` - É importante dizer que precisa fazer um checkout na branch

- Checkout é a forma de dizer que estamos mudando de branch. Para isso, use:

`git checkout nomeDaBranch` 

### Pull Requests
São atualizações realizadas no código, e que são necessárias de averiguações, para que quando aprovadas serem mescladas ao projeto principal. É necessário sempre realizar pull requests para as suas atualizações e code review. Pois assim se garante uma segurança maior na hora de enviar o seu projeto para a produção. 

### Git Clone
Como o próprio nome já diz, ele traz um clone do seu repositório remoto, para o seu repositório local. Podemos fazer a analogia, grosseiramente de um Download do projeto que está no repositório remoto. 

`git clone urlOuSSHdoRepositório` 

# Instalando e Configurando o Git
Vamos agora instalar e configurar o git no seu computador, para você se deliciar e finalmente entrar no mundo o versionamento distribuído.

## Instalando o git
 - Linux - Via terminal;
 `sudo apt-get install git-all`
 - MacOS
 -- `brew install git`

 Caso não tenha o brew instalado, execute a linha abaixo e em seguida a de cima novamente.

 -- `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"`

## Configurando o git
Está parte é legal, é onde você irá colocar o seu email e senha do git. *Não é a mesma coisa do github ta bom? Estamos configurando o seu git no seu repositório local, mais a frente iremos configurar o remoto*

 - Identidade 
 ```sh 
    git config --global user.name "Seu nome"
    git config --global user.email "seuemail@exemplo.com"
 ```
 - Verificando se tudo foi instalado

 Agora para você garantir que tudo está instalado, basta digitar o seginte comando no seu terminal: 

 `git --version` Se aparecer a versão, deu certo :) <br>
 `git config --list` Se aparacer a o seu usuário e seu email cadastrado, também deu certo :)


