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