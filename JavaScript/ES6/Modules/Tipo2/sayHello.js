// Sem ES Modules
/* module.exports = function sayHello(name){
  console.log(`Olá ${name}`);
} */

// Com ES Modules
export function sayHello(name){
  console.log(`Olá ${name}`);
}

// export default sayHello
// permite o usuário escolher o nome na hora da importação

// export {sayHello}
// obriga com que o nome seja o mesmo na hora da importação
// ou pode colocar o export na frente da criação da função