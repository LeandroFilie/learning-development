# JavaScript ES6

### [Debugging](console.md)

### [Functions e Arrow Functions](functions.md)
- O contexto do this é a principal diferença
  - Uma function tem seu próprio this, enquanto a arrow function tem o this do escopo em que foi criada

### Operators
  - [Destructuring](destructuring.md)
  - [Rest e Spread](rest-spread.md)
  - [Binário](binario.md)

### JavaScript Assíncrono
Por padrão, o JavaScript é síncrono, ou seja, tarefas que executam após a tarefa anterior terminar<br />
Assíncrono: tarefas serem executadas de maneira independente de uma da outra

- [Promises](promises.md)

- [Async/Await](Async-Await.md)
- Promises (.then e .catch) vs Async/Await
  - Quando usamos o .then, o código não fica travado
  - No async/await o código só continua se a linha que tiver await terminar de ser executada

#### Consumir APIs
- [Fetch](fetch.md)
- [Axios](axios.md)

#### [Callbacks](callback.md)

### [Helpers](helpers.md)

### [High Order Functions](hof.md)

### [ES Modules](Modules)
Por padrão, o node não aceita, apenas com Babel (transpilador de código)
- Para corrigir, temos duas Opções
#### [Mudança de extensão do arquivo](Modules/Tipo1)
- Mudar a extensão dos arquivos .js para .mjs
- E também, no momento do import, passar também a extensão do arquivo

#### [Criando arquivo package.json](Modules/Tipo2)
- Criar a tag type e setala como module
```JSON
{
  "type": "module"
}
```