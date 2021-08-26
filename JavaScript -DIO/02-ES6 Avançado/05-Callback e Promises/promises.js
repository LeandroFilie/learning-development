// mesmo código usando callback, só que com promises

const doSomethingPromise = () => 
  new Promise((resolve, reject) => {
  // throw new Error('Something went wrong');
  setTimeout(function(){
    resolve('First data');
  }, 1500);
});

const doOtherThingPromise = () =>
  new Promise((resolve, reject) => {
    // throw new Error('Something went wrong');
  setTimeout(function(){
    resolve('Second data');
  }, 1000);
});

// Pending: em execução
// Fulfilled: terminou de executar
// Rejected: erro

// caso de erro aparece a mensagem

//Promises se encadeiam
//Processamento sequencial
doSomethingPromise()
  .then(data => {
    console.log(data.split(''));
    return doOtherThingPromise();
  })
  .then(data2 => console.log(data2.split('')))
  .catch(error => console.log('Ops', error));

// Promises acontecem uma depois da outra

//isso faz com que executem paralelamente
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

