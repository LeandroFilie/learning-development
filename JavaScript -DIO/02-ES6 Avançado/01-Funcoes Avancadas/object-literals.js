var prop1 = 'Digital Innovation One'
function method1(){
  console.log('method 1');
}

var obj = {
  prop1, //propriedade e método de mesmo nome
  method1,
  sum: function(a, b){
    return a + b;
  },
  sum2(a, b){
    return a + b;
  }
};

console.log(obj);
obj.method1();
console.log(obj.sum(1, 2));
console.log(obj.sum2(1, 2));

var propName = 'propriedade';

var obj2 = {
  [propName]: 'valor da propriedade'
}

console.log(obj2);