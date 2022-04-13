# Promises
- Uma promise recebe duas funções, resolve e reject
- Uma promise só é resolvida ou rejeitada quando executa as funções(resolve ou reject)

```js
const apiCallPending = new Promise((resolve, reject) => {
  
})
```

```js
fn
  .then((resposta) => {
    //resolve
    console.log(resposta);
  })
  .catch((erro) => {
    //reject
    console.log(erro);
  }) */
```

## Processamento paralelo

```js
Promise.all([doSomethingPromise(), doOtherThingPromise()])
.then((data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
})
```

A que for revolvida primeiro vence
```js
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
})
```