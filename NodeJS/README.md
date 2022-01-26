# Node.js
Plataforma (runtime) que permite executar JavaScript no servidor

## Características

### Call Stack
Pilha de processamento do código <br/>
A primeira função que entra, é a última a sair

### Single Thread
Tem apenas uma call stack, ou seja, executa uma coisa por vez<br/>
Porém, ao mesmo tempo ele é
  - Non-blocking I/O
  - Executa código assíncrono
Ele consegue isso porque por debaixo dos panos ele roda com a libuv (bib escrita em C)
  - Essa lib implementa diversas coisas, como Thread Pool e Event Loop

```js

console.log('antes')

db.query(query, function callback(err, data){ //função bloqueadora
  console.log(data)
})

console.log('depois')

```

Quando o código chega em uma função bloqueadora, teoricamente ele só poderia rodar o resto quando ela terminasse. Com a libuv, essa função bloqueadora vai para o Thread Pool, liberando a call stack principal. <br/>

Quando a função bloqueadora termina de rodar, a função de callback passada para ela vai para a Callback Queue. Entre a Callback Queue e a Call Stack, tem o Event Loop, que fica vendo se tem algo na Callback Queue e quando encontrar, ele puxa a função de callback para a Call Stack.


## API - Application Programming Interface
Permite que conectemos várias aplicações em uma mesma fonte de dados

- Padrão REST: um padrão de construção de APIs que usa o protocolo HTTP
  - Nome de endpoints: sempre no plural
  - Representação do Estado: retornar os dados de forma genérica, usando o JSON por exemplo

## [HTTP](../Conceitos/http.md)
Troca de mensagens entre duas pontas
  - Requests/responses

### Request
- URL/endpoint
  - Identificação de recursos

  <img src="./img/http1.png" />

- Query Params
  - Parâmetros adicionais passados na URL

- Método
  - Qual ação queremos tomar em cima do recurso identificado pela URL
  - GET: consulta de dados
  - POST: criação de registros
  - PUT: alteração de registros
  - DELETE: deleção de registros
  
- Headers
  - Informações adicionais
  - "Content-Type: application/json
  - Case insensitive
  - Custom Header: criar sempre começando com um X

- Body
  - Corpo da mensagem
  - Apenas em POST ou PUT
    - JSON
    - Multipart/form-data: para enviar imagens e arquivos

### Responses 
- Headers
  - Informações adicionais

- Content Type
  - Tipo de conteúdo da resposta

- Status Code
  - Indica o que aconteceu com a request

- Body
  - Dados requisitados

## Modules
São conjuntos de código.

- 3 Tipos de Módulos
  - Todos os arquivos js são módulos
  - Nativos
  - npm 

- Para importar módulos, usa-se a palavra chave "require"

- No arquivo do módulo a ser importado, você escolhe o que ser importado, através da função "module.exports"

## Estrutura do projeto

### Controller
- Onde ficam as regras de negócio da api
- Os métodos são:
  - index: listar registros
  - show: obter um registro
  - store: criar novo registro
  - update: editar um registro
  - delete: deletar um registro

### Repository Pattern
- Layer (camada) de abstração de abstração ao Data Source (fonte de dados => array, SQL, NoSQL, json, api)
- Conhece as regras de implementação <br />

Controller <-> Repository <-> Data Source

## Middlewares
Life Cycle padrão de uma request: <br />
Request -> Controller -> Response <br />

Os Middlewares alteram esse comportamento <br />
Request <-> Middlewares -> Controller -> Response <br />

Servem para manipular os objetivos de request e response, como adicionar ou remover propriedades, de forma com que fique disponível em todos os controllers da aplicação <br />

Middlewares controlam o life cycle, podendo fazer com que a aplicação continue para o controller ou que volte uma resposta para a request <br />

### Características
- O express entende as rotas como Middlewares
- São executados na sequencia em que são declarados
- Tem que indicar se vai parar ou continuar a execução
  - Para parar: enviar um response
  - Para continuar: recebe um parâmetro a mais, a função "next", que quando chamada faz com que a execução continue

## Docker
- São container onde podemos executar aplicações de forma isolada
- Usa o mesmo kernel da máquina host, com isso, é mais leve e eficiente do que usar uma VM tradicional

### Imagens Docker
- Define o que será executado dentro do container
- dockerhub: repositório de imagens prontas

### Comandos
- <code>docker pull [nome_imagem]</code>: baixar uma imagem
- <code>docker imagem ls</code>: lista todas as imagens instaladas
- <code>docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres</code>
  - Serve para criar um container
  - <code>--name</code>: nome do container
  - <code>-e [VARIAVEL=valor]</code>: cria variáveis de ambiente
  - <code>p [portaHost:portaContainer]</code>: especifica a porta
  - <code>-d</code>: modo de execução, no caso -d faz com que seja executado em background

- <code>docker container ls</code> ou <code>docker ps</code>: ver os container que estão rodando
- <code>docker container ls -a</code> ou <code>docker ps -a</code> : lista os container parados ou rodando
- <code>docker stop [nome/id]</code>: parar o container
- <code>docker start [nome/id]</code>: iniciar o container
- <code>docker rim [repository/id]</code>: excluir uma imagem
  - antes de excluir uma imagem, tem que excluir os containers que usam ela
- <code>docker container rm [nome/id]</code>: excluir um container
  - antes de excluir um container, tem que dar um stop nele

### Banco de dados
- <code>docker exec -it [nome_container] bash</code>: acessar container
- <code>psql -U [POSTGRES_USER]</code>: logar no postgres
- <code>\l</code>: listar base de dados
- <code>\c [nome_base_dados]</code>: conectar em uma base de dados
- <code>\dt</code>: listar tabelas de uma base de dados