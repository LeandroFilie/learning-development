/* 
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo. 
*/

let balanceFamily = {
  incomes: [1000, 500.58, 1000, 1500.98],
  expenses: [500.90, 200, 300.45, 1000]
}

function sum(array){
  let total = 0

  for(let value of array){
    total += value
  }

  return total
}

function calculateBalance(objBalance){
  let sumIncomes = sum(objBalance.incomes)
  let sumExpenses = sum(objBalance.expenses)

  let balanceFinal = sumIncomes - sumExpenses

  let message

  if(balanceFinal > 0){
    message = `Saldo Positivo: $${balanceFinal.toFixed(2)}`
  }
  else{
    message = `Saldo Negativo: $${balanceFinal.toFixed(2)}`
  }

  console.log(message);
}

calculateBalance(balanceFamily)