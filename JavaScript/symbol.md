# Symbol

Gerar um identificador único

```js
const uniqueId = Symbol('valor');
// o valor passado serve somente para debug

const obj = {
  [uniqueId]: 'Hello'
}

console.log(obj);

// Well know symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag

// Iterador => interface para consumir passo a passo uma lista de dados
const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One'
for (let value of arr){
  console.log(value);
}

// Tornando um objeto iterável
const objeto = {
  values: [1, 2, 3, 4],
  [Symbol.iterator](){
    let i = 0;
    return {
      next: () => {
        i++;
        return{
          value: this.values[i - 1],
          done: i > this.values.length
        }
      }
    }
  }
}

const it = objeto[Symbol.iterator]()

for (let value of objeto){
  console.log(value);
}

const arr2 = [...objeto];
console.log(arr2);

```