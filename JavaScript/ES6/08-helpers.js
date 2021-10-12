const tech = 'Node.js';
const array = ['Node.js', 'React', 'TypeScript']

const includes = tech.includes('.')
console.log(includes);

const includesArray = array.includes('React Native')
console.log(includesArray);
// Nesse caso, pesquisa a posição inteira, não apenas por partes

const startsWith = tech.startsWith('N')
console.log(startsWith);

const endsWith = tech.endsWith('N')
console.log(endsWith);