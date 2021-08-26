const users = ['Guilherme', 'Pedro', 'Jennifer'];

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W')
}

const persons = [
  {
    name: 'Guilherme',
    age: 26,
    gender: gender.MAN
  },
  {
    name: 'Pedro',
    age: 43,
    gender: gender.MAN
  },
  {
    name: 'Jennifer',
    age: 18,
    gender: gender.WOMAN
  }
]

// FUNÇÕES

// Retornar a quantidade de itens de um array
console.log('Items:', persons.length);

// Verificar se é array
console.log('A variável persons é um array: ', Array.isArray(persons));

// Iterar os itens do array
persons.forEach(person => {
  console.log(`Nome: ${person.name}`);
})

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('Nova lista apenas com homens: ', mens);

// Retornar um novo
const personsWithCourse = persons.map(person => {
  person.course = 'Introdução ao JS';
  return person;
})

console.log('Pessoas com adição do curso', personsWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);

console.log('Soma de idade das pessoas', totalAge);

const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                          age += person.age;
                          return age;
                        }, 0);

console.log('Soma de idades das pessoas que possuem idade par', totalEvenAges);    


