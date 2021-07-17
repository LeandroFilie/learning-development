// Recebe uma outra função como parâmetro e estende seu comportamento sem modifica-la explicitamente

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
