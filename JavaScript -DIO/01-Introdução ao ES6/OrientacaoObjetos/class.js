'user strict';

// Sem class

/* function Animal(qtdPatas){
  this.qtdPatas = qtdPatas;
}

function Cachorro(morde){
  Animal.call(this, 4);

  this.morde = morde;
}

const pug = new Cachorro(false);
console.log(pug);
 */
// Com Class

class Animal{
  constructor(qtdPatas){
    this.qtdPatas = qtdPatas;
  }
}

class Cachorro extends Animal{
  constructor(morde){
    super(4);
    this.morde = morde;
  }
}

const pug = new Cachorro(false);
console.log(pug);