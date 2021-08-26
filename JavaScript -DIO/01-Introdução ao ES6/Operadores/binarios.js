// in

var arvores = new Array('pau-brasil', 'loureiro', 'cedro');

console.log(0 in arvores);
console.log('cedro' in arvores);
// console.log('cedro' in arvores[2]);

console.log('PI' in Math);

// instanceof
// objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if(dia instanceof Date){
  console.log("sim");
}