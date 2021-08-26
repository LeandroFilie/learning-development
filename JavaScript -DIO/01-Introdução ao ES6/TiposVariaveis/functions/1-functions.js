function fn(){
  return 'Code here';
}

const arrowFn = () => 'Code Here'
const arrowFn2 = () => {
  return 'Code Here';
}

// Também são objetos
fn.prop = 'Posso criar propriedades'

console.log(fn());
console.log(fn.prop);

// Recebem parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
  if(allowed){
    fnParam();
  }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true);
handleFnExecution();

// controlFnExec como função
function controlFnExec(fnParam){
  return function(allowed){
    if(allowed){
      fnParam();
    }
  }
}
