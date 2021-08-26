// Funções com pausa e despausa que retorna valores através de iterações

function* hello(){
  console.log('Hello');
  yield 1;

  console.log('From');
  const value = yield;

  console.log(value);
}

const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next('Valor'));

const objeto = {
  values: [1, 2, 3, 4],
  *[Symbol.iterator](){
    for(var i = 0; i < this.values.length; i++){
      yield this.values[i];
    }
  }
}

for(let value of objeto){
  console.log(value);
}