const textSize = 'texto'.length;
console.log(`Quantidade de letras ${textSize}`);

const splittedText = 'Texto'.split('x');
console.log(`Array com as posições separadas pelo delimitador: ${splittedText}`);

const replacedText = 'texto'.replace('texto', 'text');
console.log(`Substituição de valor: ${replacedText}`);

const lastChar = 'texto'.slice(-1);
console.log(`Ultima letra de uma string: ${lastChar}`);

const allWithoutLastChar = 'texto'.slice(0, -1);
console.log(`Valor da string da primeira letra menos a última: ${allWithoutLastChar}`);

const secondToEnd = 'Texto'.slice(1);
console.log(`Valor da string da segunda letra até a ultima: ${secondToEnd}`);

const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log(`As duas primeiras letras são: ${twoCharsBeforeFirstPos}`);