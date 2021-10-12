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

// Async/Await
async function run(){
  try{
    const resposta = await apiCall //JS só sai dessa linha no momento em que a promise finalizar
    console.log(resposta);
  }
  catch (erro){
    // erro será o mesmo do reject
    console.log(erro);
  }
}

run()