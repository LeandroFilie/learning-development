// ITERAR ELEMENTOS

const arr = [1 ,2, 3, 4, 5];

//forEach => somente itera os elementos
arr.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
})

//map => retorna um novo array
const dobroArr = arr.map(value => value * 2);
console.log(dobroArr);

//flat
const arr2 = [1, 2, [3, 4]]
console.log(arr2);
console.log(arr2.flat());

//flatMap
console.log(arr.flatMap(value => [value * 2]));

console.log(arr.flatMap(value => [[value * 2]]));

// buscar elementos

const firstGreaterThanTwo = arr.find(value => value > 2);
console.log(firstGreaterThanTwo);

const indexFirstGreaterThanTwo = arr.findIndex(value => value > 2);
console.log(indexFirstGreaterThanTwo);

const allValuesGreaterThanTwo = arr.filter(value => value > 2);
console.log(allValuesGreaterThanTwo);

const firstIndexOfItem = arr.indexOf(3);
console.log(firstIndexOfItem);

const arr3 = [1, 3, 3, 4 ,3]
const lastIndexOfItem = arr3.lastIndexOf(3);
console.log(lastIndexOfItem);

const hasItemOne = arr3.includes(1);
console.log(hasItemOne);
const hasItemTwo = arr3.includes(2);
console.log(hasItemTwo);

const hasSomeEvenNumber = arr3.some(value => value % 2 === 0);
console.log(hasSomeEvenNumber);

const AllEvenNumber = arr3.every(value => value % 2 === 0);
console.log(AllEvenNumber);

const persons = [
  {
    name: 'Guilherme',
    grade: 10,
  },
  {
    name: 'Pedro',
    grade: 6,
  },
  {
    name: 'Jennifer',
    grade: 7,
  }
]

const order = persons.sort((current, next) => current.grade - next.grade);
console.log(order);

const reverse = arr.reverse()
console.log(reverse);

const join = arr.join('-');
console.log(join);

const totalGrade= persons.reduce((grade, person) => {
  grade += person.grade;
  return grade;
}, 0);
console.log(totalGrade);