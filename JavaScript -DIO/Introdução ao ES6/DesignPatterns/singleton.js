// Criar uma única instância de uma função e retorna-la toda vez que for necessário utiliza-la

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