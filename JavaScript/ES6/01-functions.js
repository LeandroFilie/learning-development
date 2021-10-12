// =============== THIS ==================
// ============== Função normal =============
function myFunction(){
  // Seu próprio this
  this.name = 'Leandro'
  const myArrowFunction = () => {
    // this do escopo em que foi criada
    this.lastName = 'Filie'
  }
  
  myArrowFunction();
}

console.log(typeof myFunction()); // uma função, por padrão, é undefined
console.log(typeof new myFunction()); // o método construtor NEW transforma essa função em um objeto
console.log(new myFunction()); //sendo um objeto, podemos usar o this para definir propriedades dentro dela
console.log(this); //{}, pois esse é this do escopo global

// ================= Arrow Function =======================
const myArrowFunction = () => {
  // this do escopo em que foi criada
  this.name = 'Leandro'
}

myArrowFunction();
console.log(this);

console.log(myArrowFunction()); // não pode usar o NEW, portando não é um objeto e, por isso, não tem um this próprio

// =================== Argumentos de Funções
function soma(){
  console.log(arguments);
  //arguments é uma variável especial do JS
  // reconhece automaticamente todos os argumentos passados para a função
}

soma(1, 2, 3, 4, 5)

// rest operator
function soma2(...argumentos){
  console.log(argumentos);
}

soma2(1, 2, 3, 4, 5)

// nas arrow functions, só podemos fazer usando o rest operator
// arguments funciona da mesma forma do this

// ============== FORMAS DE USAR ARROW FUNCTIONS
const hello = () => {
  return 'Hello Word'
}

//Short Syntax
const helloShort = () => 'Hello Word'

const algumNumero = 10;
const short2 = () => (
  algumNumero >= 10
  ? 'Maior ou igual a 10'
  : 'Menor que 10'
)

// retornar objeto
const getUser = () => ({
  id: '123',
  name: 'Leandro'
})


// =========== Parâmetros Default

function printGreetings(message){
  console.log(message);
} 

printGreetings(); // undefined

function printGreetingsWithDefault(message = 'Mensagem Padrão'){
  console.log(message);
} 

printGreetingsWithDefault();

