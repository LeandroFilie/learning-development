// Declaração de variáveis e função são elevadas ao escopo que ela está

// Hoisting de variável eleva somente sua criação
// Hoisting de Função eleva, além da criação, sua atribuição

// Variáveis
function fn(){
  console.log(text);

  var text = 'Exemplo';

  console.log(text);
}

fn();

// Funções
function fn2(){
  log('Hoisting de Função');

  // isso não é uma boa prática. Uma boa prática é chamar a função somente depois de criar ela

  function log(value){
    console.log(value);
  }
}

fn2();