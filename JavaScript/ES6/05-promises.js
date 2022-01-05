// Uma promise recebe duas funções, resolve e reject
// Uma promise só é resolvida ou rejeitada quando executa as funções(resolve ou reject)

/* const apiCallPending = new Promise((resolve, reject) => {
  
})

console.log(apiCallPending); */

const apiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('Sucesso');
      reject('Erro');
    }, 2000)
})

/* apiCall
  .then((resposta) => {
    //resolve
    console.log(resposta);
  })
  .catch((erro) => {
    console.log(erro);
  }) */

run()

//Processamento paralelo

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
})

// a que for revolvida primeiro vence
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
})