# Design Patterns

## Decorator
Recebe uma outra função como parâmetro e estende seu comportamento sem modifica-la explicitamente

```js
let loggedIn = false;

function callIfAuthenticated(fn){
  return !!loggedIn && fn();
}

function sum(a, b){
  return a + b;
}

let execution = callIfAuthenticated(() => sum(2, 3));
console.log(execution);

loggedIn = true;
execution = callIfAuthenticated(() => sum(2, 3));
console.log(execution);

loggedIn = false;
execution = callIfAuthenticated(() => sum(2, 3));
console.log(execution);
```
## Factory
Funções que retornam um objeto, sem a necessidade de chamá-las com o new
```js
// NÃO É FACTORY
function FakeUser(){
  this.name = 'Leandro';
  this.lastName = 'Gomes';
}

const user = new FakeUser();
console.log(user);

// É FACTORY
function FakeUser(){
  return{
    name: 'Leandro',
    lastName: 'Gomes'
  }
  
}

const user = FakeUser();
console.log(user);
```
## Module
```js
// Antigamente
(function($){
  // code here
})(jQuery)

//Hoje em dia

class Person{
  constructor(name){
    this.name = name;
  }
}

// permite exportar
export default Person;

// e importar para utilizar
import Person from "./module";
```
## Observer
Observers escutam alguma coisa e toda vez que tiver alguma alteração ele será responsável por chamar todos os subscribers
```js
class Observable{
  constructor(){
    this.observers = [];
  }

  subscribe(f){
    this.observers.push(f)
  }

  unsubscribe(f){
    this.observers = this.observers.filter(subscriber => subscriber !== f)
  }

  notify(data){
    this.observers.forEach(observer => observer(data));
  }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1)
o.subscribe(logData2)
o.subscribe(logData3)

o.notify('notified')
```
## Singleton
Criar uma única instância de uma função e retorna-la toda vez que for necessário utiliza-la
```js
function Pessoa(){
  if(!Pessoa.instance){
    Pessoa.instance = this;
  }

  return Pessoa.instance;
}

const p = Pessoa.call({name: 'Guilherme'}); //uma vez instanciado, será para todas as vezes que for chamada

const p2 = Pessoa.call({name: 'Custom name'});

console.log(p);
console.log(p2);
```