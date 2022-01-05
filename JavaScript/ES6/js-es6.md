# JavaScript ES6

## [Debugging](15-console.js)

## Functions
- [Functions e Arrow Functions](01-functions.js)
  - O contexto do this é a principal diferença
    - Uma function tem seu próprio this, enquanto a arrow function tem o this do escopo em que foi criada
  - Parâmetros default em funções

- Operator
  - [Destructuring](02-Destructuring.js)
  - [Rest](03-rest.js)
  - [Spread](04-spread.js)
  - [Binário](10-binario.js)

## [Promises](05-promises.js)
Promises são usadas quando tarefas muito pesadas ou que podem demorar são executadas. Ex: consulta ao BD

- Promises (.then e .catch) vs Async/Await
  - Quando usamos o .then, o código não fica travado
  - No async/await o código só continua se a linha que tiver await terminar de ser executada

### [Async/Await](12-Async-Await.js)


### [Callbacks](11-callback.js)
Callbacks executam algo após uma tarefa síncrona ter sido executada


## Consumir APIs
### [Fetch](14-fetch/fetch.js)

### [Axios]()


## [ES Modules](07-Modules)
Por padrão, o node não aceita, apenas com Babel (transpilador de código)
- Para corrigir, temos duas Opções
### [Mudança de extensão do arquivo](07-Modules/Tipo1)
- Mudar a extensão dos arquivos .js para .mjs
- E também, no momento do import, passar também a extensão do arquivo

### [Criando arquivo package.json](07-Modules/Tipo2)
- Criar a tag type e setala como module
```JSON
{
  "type": "module"
}
```

## [Helpers](08-helpers.js)
- Includes: verifica se dentro de uma string ou array existe o parâmetro passado
- startsWith: verifica se alguma string começa com uma sequência de caracteres
- endsWith: verifica se termina com uma sequência de caracteres

### High Order Functions
- find: busca dentro do array, alguma coisa
  - Percorre todos os elementos
  - No momento que é retornado o true, o elemento que está sendo iterado é jogado para a variável
  - Sempre retorna o primeiro elemento em que a condição retornou true

- findIndex: a mesma coisa que o find, porém retorna a posição

- some: verifica se algum elemento do array bate com a condição
  - Retorna um boolean

- every: igual ao every, porém todos os itens tem que retornar true para a condição

- map: cria um novo array baseado no anterior, porém, modificando alguma propriedade
  - O retorno sempre será um array com o mesmo número de posições do array base

- filter: filtrar array
  - Toda vez que um item satisfazer a condição, este item é jogado para o novo array

- reduce: pegar o array e transformar em um outro tipo de dados
```js
array.reduce((acumulador, momento) => {

}, valorInicial)
```

## [Event Emitter](13-EventEmitter.js)