const user = {
  firstName: 'Leandro',
  lastName: 'Filié',
  age: 23,
  instagram: 'leandro.gf03',
  skills: ['HTML', 'CSS', 'JS'],
  active: false
};

// Alterar o active para true
// user.active = true;
//desse modo, fere-se o conceito de imutabilidade
// IMUTABILIDADE: nunca alterar um dado. Clone as informações em um novo objeto e ai sim faça as alterações

// Sem Spread operator
const updatedUser = {
  firstName: user.firstName,
  lastName: user.lastName,
  age: user.age,
  instagram: user.instagram,
  skills: user.skills,
  active: true
}

// Com Spread Operador
// não precisa estar no final, só se atentar na regra abaixo
// se um objeto tiver duas propriedades com o mesmo nome, o ultimo é o que prevalece
const updatedUserWithSpread = {
  ...user,
  skills: [...user.skills, 'React'],
  active: true 
}

console.log(user);
console.log(updatedUser);
console.log(updatedUserWithSpread);
