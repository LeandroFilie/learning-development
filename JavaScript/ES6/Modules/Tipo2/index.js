// Sem ES Modules
/* const sayHello = require('./sayHello')
sayHello('Leandro'); */

// Com ES Modules
// import sayHello from "./sayHello.js";
// Pode alterar o nome => com export default

import { sayHello } from './sayHello.js';
// somente com export

// import { sayHello as NovoNome } from './sayHello.js';
// se quiser mudar o nome

sayHello('Leandro');