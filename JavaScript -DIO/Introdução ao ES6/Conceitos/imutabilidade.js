// Uma variável nunca se altera
// Se precisar mudar, cria outra variável

// EXEMPLO 1
const user = {
  name: 'Leandro',
  lastName: 'Gomes Filié'
}

function getUserFullName(user){
  return{
    ...user, //spread operator => para cada propriedade que receber do 'user', vai colocar no novo objeto
    fullName: `${user.name} ${user.lastName}`
  }
}

const userFullName = getUserFullName(user)

console.log(userFullName);

// EXEMPLO 2
const students = [
  {
    name: 'Grace',
    grade: 7
  },
  {
    name: 'Jennifer',
    grade: 4
  },
  {
    name: 'Paul',
    grade: 10
  },
];

function getApprovedStudents(studentsList){
  return studentsList.filter(student => student.grade >= 7)
}

console.log('Alunos Aprovados');
console.log(getApprovedStudents(students));

console.log('Lista de Alunos');
console.log(students);