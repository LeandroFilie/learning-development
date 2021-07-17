const myNumber = 12.4032;

const numberAsString = myNumber.toString();
console.log(`Número transformado em string: ${typeof numberAsString}`);

const fixedTwoDecimals = myNumber.toFixed(2);
console.log(`Número com duas casas decimais: ${fixedTwoDecimals}`);

console.log(`String parseada para float ${parseFloat('13.22')}`);

console.log(`String parseada para int ${parseInt('13.20')}`);