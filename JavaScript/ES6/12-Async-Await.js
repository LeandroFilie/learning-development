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

const asyncTimer = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(12345);
  }, 1000);
})

const simpleFunc = async () => {
  const data = await asyncTimer();
  return data;
}

simpleFunc().then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})