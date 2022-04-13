# Git - Versionamento de Código
- Controle de versão de sistema distribuído

## Tópicos Fundamentais

### SHA-1
- Algoritmo de encriptação
- A encriptação gera um conjunto de 40 caracteres, que serve como identificação
- Qualquer mudança feita em um arquivo, irá gerar um SHA-1 diferente

### Objetos Internos do GIT
- blob: contém metadados dos arquivos
- Tree: armazena blobs e tem os metadados dessa árvore
- Commit: aponta para uma árvore(tree), para o ultimo commit, para o autor e para a mensagem
  - Também possui a geração de um SHA-1

## Comandos
- <code>git init</code> : inicializar o repositório git
- <code>git add .</code>: adicionar arquivos
- <code>git commit -m "descrição do commit"</code>: criar um commit
- <code>git status</code>: mostra o status dos arquivos
- <code>git remote add origin [URL-repositório]</code>: apontar o repositório local para um repositório remoto
- <code>git push origin [nome_branch]</code>: enviar o repositório local para o repositório remoto
- <code>git pull origin [nome_branch]</code>: pegar os arquivos do repositório remoto para o repositório local

### Resolver conflitos
- Conflito de merge: GitHub tenta juntar duas alterações em uma mesma linha
  - Ele não irá alterar, indicará para que você escolha o que quer manter ou excluir e ai sim enviar

## Ciclo de Vida
### Untracked
- Não rastreado pelo git
- Para mover para _staged_, é usado o comando git add

### Staged
- Arquivos aqui, estão se preparando para fazerem parte de um commit

### Ambiente de Desenvolvimento/ Computador Local
- Working Directory: o repositório de trabalho
- Staging Area: área onde os arquivos esperam por um commit
- Local Repository: após um commit, os arquivos começam a fazer parte desse repositório local

## Branches
- Uma biforcação da linha do tempo do repositório
- Pode-se trabalhar em branches de forma paralela e depois uni-las

### HEAD
- Uma tag que acompanha os commits e aponta sempre para o ultimo commit da branch
- Indica em qual branch se esta atualmente

### Comandos
- <code>git checkout [nome_branch]</code>: mover entre branchs
  - <code>git checkout -b [nome_branch]</code>: criando e movendo para a nova branch

- <code>git merge [nome_branch]</code>: fundir duas branchs
  - Primeiro: ir para a branch
  - Segundo: fundir na branch atual, a branch que quiser

- <code>git branch</code>: mostra as branchs do repositório local e destaca em qual se esta atualmente

- <code>git branch -m [novo_nome_branch]</code>: alterar o nome de uma branch estando nela

- <code>git branch -m [nome_branch] [novo_nome_branch]</code>: alterar o nome de uma branch estando em qualquer outra

- <code>git branch -d [novo_nome_branch]</code>: deletar branch

#### stash
- Se mover entre branchs sem carregar nada de outras branchs

- <code>git stash save "[mensagem para identificar]"</code>: criar uma stash
  - Pega tudo que está na stage area e adiciona em uma "caixa"

- <code>git stash list</code>: mostrar os stashs criados

- <code>git stash pop [index do stash]</code>: abrir a "caixa", fazendo os arquivos voltarem novamente

- <code>git stash clear</code>: limpar a lista de stash

### Visualização de Histórico
- <code>git log</code>
  - Traz o topo da branch (ultimo commit) e histórico completo de commits

- <code>git log [nome_pasta | nome_arquivo]</code>: ver os logs somente dos arquivos da pasta citada ou de um arquivo específico

- <code>git log --online</code>: forma resumida e abrangente

- <code>git log --graph</code>: forma "gráfica"

### Reverter commits
- git reset: manipula o estado dos arquivos
  - <code>git reset [hash_commit]</code>
  - <code>git reset HEAD~1</code>
    - "Olhe onde a HEAD está e se mova um para trás"
  - A HEAD volta até o commit indicado
  - TAGS
    - <code>git reset --soft [commit]</code>: mandar arquivos de volta para stage area
    - <code>git reset --mixed [commit]</code>: é o comportamento default, os arquivos vão para o working director, ou seja, antes de um git add
    - <code>git reset --hard [commit]</code>: retira os arquivos do commit

- git revert: não manipula os estados dos arquivos, mas sim os commits
  - <code>git revert [commit]</code>
    - Cria um novo commit tirando as alterações do commit desejado

## Estruturar commits
- Commits atômicos: commits contendo o início, meio e fim de tal implementação
- Assunto
  - curto e compreensível
  - até 50 caracteres
  - começar com letra maiúscula
  - não terminar em ponto
  - escrito de forma imperativa
- [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/)