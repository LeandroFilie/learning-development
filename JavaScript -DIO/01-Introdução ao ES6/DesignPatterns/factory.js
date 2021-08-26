// Funções que retornam um objeto, sem a necessidade de chamá-las com o new

// NÃO É FACTORY
/* function FakeUser(){
  this.name = 'Leandro';
  this.lastName = 'Gomes';
}

const user = new FakeUser();
console.log(user); */

// É FACTORY
function FakeUser(){
  return{
    name: 'Leandro',
    lastName: 'Gomes'
  }
  
}

const user = FakeUser();
console.log(user);