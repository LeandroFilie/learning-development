// Sem destructuring Assignment
// Arrays
var arr = ['maça', 'banana', 'laranja', ['tomate']];

var maca = arr[0];
var banana = arr[1];
var laranja = arr[2];
var tomate = arr[3][0];

// Com destructuring Assignment
// Arrays
var [maca2, banana2,laranja2, [tomate2]] = ['maça', 'banana', 'laranja', ['tomate']];

// Objetos
var obj = {
  name: 'Leandro',
  props: {
    age: 18,
    favoriteColors: ['black', 'blue']
  }
}

var { 
  name: name2, 
  props: {
    age: age2, 
    favoriteColors: [color1, color2]
  } 
} = obj;
console.log(name2);
console.log(age2);
console.log(color1);
console.log(color2);

//function
function sum([ a, b ] = [0, 0]){ //pode combinar com default values
  return a + b;
}

console.log(sum([5,5]));