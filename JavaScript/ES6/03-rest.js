const user = {
  firstName: 'Leandro',
  lastName: 'Filié',
  full_name: 'Nome Completo',
  age: 23,
  instagram: 'leandro.gf03',
  skills: ['HTML', 'CSS', 'JS']
};

// Rest (resto) operator
// SEMPRE PRECISA SER A ULTIMA VARIÁVEL
const { firstName, skills, ...restoUser } = user
const [ primary, ...restoSkills ] = skills

console.log(firstName, primary);
console.log(restoUser);
console.log(restoSkills);