# Fetch
Retorna uma promise<br />
É uma função usada para interagir com APIs

## Funcionamento
- Só cai no <code>catch</code> quando tiver problema de conexão com o servidor.
- Mesmo se o servidor retornar um status de erro, irá cair no then.

## Estrutura do objeto response
- body: corpo da requisição
  - Em formato ReadableStream, por isso é necessário converter para ser usado.
- bodyUsed: valor booleano. Diz se está ou não usando o body.
- headers: são os headers recebidos pela requisição.
- ok: valor booleano. Diz se a requisição teve um status code de sucesso ou de erro.
- redirected: valor booleano. Indica se a requisição foi redirecionada para outro endereço ou não.
- status: código de erro que o back-end retorna.
- statusText: texto de retorno da requisição
- type: o tipo da requisição
  - Uma requisição e uma resposta são do mesmo tipo
  - basic: endereço da requisição é o mesmo da origem
  - cors
  - error
  - opaque
  - opaqueredirect
- url: a url para onde está indo a requisição
- [Mais sobre requisições](../../Conceitos/requests.md)

## Método GET
É o método padrão do fetch
```js
fetch('url')
  .then( response => response.json()) // formatando os dados para o formato JSON
  .then(data => console.log(data)) //pegando os dados do retorno à consulta à API
  .catch(err => console.log('Erro'))
```

## Método POST PUT e DELETE
```js
fetch('url/id', {
  method: "POST | PUT | DELETE", //método
  body: JSON.stringify(data), //corpo da requisição. o que quer que seja enviado
  headers: {
    "Content-type": "application/json; charset=UTF-8" // o tipo do conteúdo que está sendo enviado
  }
})
  .then()
  .catch()
```

Obs: para o método delete, não é necessário passar o body