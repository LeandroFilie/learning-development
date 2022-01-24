const { printName, lastName } = require('./printName'); //módulos criados

printName(`Leandro ${lastName}`);

const os = require('os'); //módulos nativos
console.log(os.type());