// Criar um array de acordo com o número de parâmetros informados
const arr = Array.of(1, 2, 3)
console.log(arr);

const arr2 = Array(3);
console.log(arr2);

// semelhante ao Array.of
const arr3 = Array(3, 2);
console.log(arr3);

// Array.from
const divs = document.querySelectorAll('div');
const arrDivs = Array.from(divs);

console.log(divs);

// Inserir e remover elemento

const frutas = ['melancia', 'uva'];

frutas.push('laranja')
console.log(frutas);
frutas.unshift('acerola')
console.log(frutas);

frutas.pop(); //retorna o item removido
console.log(frutas);
frutas.shift('acerola')
console.log(frutas);

// concatenar um ou mais arrays retornando um novo array
const salgados = ['coxinha', 'pastel']

const alimentos = frutas.concat(salgados);
console.log(alimentos);

const arr4 = [1 ,2, 3, 4, 5];

console.log(arr4.slice(0,2));
console.log(arr4.slice(2));
console.log(arr4.slice(-1));
console.log(arr4.slice(-3));

arr4.splice(2)
console.log(arr4);

arr4.splice(0, 0, 'first');
console.log(arr4);