// Destructuring em objetos
const user = {
  firstName: 'Leandro',
  lastName: 'Filié',
  full_name: 'Nome Completo',
  age: 23,
  instagram: 'leandro.gf03',
  skills: ['HTML', 'CSS', 'JS']
};

// Sem Destructuring
/* const firstName = user.firstName;
const age = user.age */

// com Destructuring
const { firstName, age, skills, full_name: fullName } = user
// Pegar valores de dentro de um obj e salvar em uma outra variável
// Pega os valores pelo nome da propriedade
// Se quiser renomear um dos valores, nomePropriedade: valor

console.log(firstName, age);

// Destructuring em arrays
const [ primary, secondary, tertiary ] = skills
// Pega os valores através das posições do array
// Por isso, podemos dar qualquer nome as variáveis
console.log(primary);