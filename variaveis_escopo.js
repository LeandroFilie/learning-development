// Escopo Global

// VAR ==> não respeita escopo de bloco
// Let e Const respeitam

{
  // Escopo de Bloco
}

function test(){
  //escopo de função
}

console.log('-------- VAR -----------');
var test = 'example';

(() => {
  console.log(`Valor dentro da função ${test}`);

  if(true){
    var test = 'example';
    console.log(`Valor dentro do if ${test}`);
  }

  console.log(`Valor após execução do if ${test}`);
})();

console.log('-------- LET -----------');
(() => {
  let testLet = 'valor função'
  console.log(`Valor dentro da função ${testLet}`);

  if(true){
    let testLet = 'valor if';
    console.log(`Valor dentro do if ${testLet}`);
  }

  console.log(`Valor após execução do if ${testLet}`);
})();

console.log('-------- CONST -----------');
const name = 'Leandro'; //não pode alterar o nome

const user = {
  name: 'Leandro'
}

user.name = 'Outro Nome'; //se for objeto, pode alterar

const persons = ['Pessoa 1', 'Pessoa 2', 'Pessoa 3'];

persons[1] = 'Pessoa X'; // array também pode alterar
console.log(persons);
