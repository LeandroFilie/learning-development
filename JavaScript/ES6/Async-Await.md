# Async/Await
- Usado para executar tarefas assíncronas
- Por baixo dos panos, é uma promise

```js
async function run(){
  try{
    const resposta = await fn //JS só sai dessa linha no momento em que a promise finalizar
    console.log(resposta);
  } catch (erro){
    // erro será o mesmo do reject
    console.log(erro);
  } finally {
    console.log("Roda sempre")
  }
}
```js
