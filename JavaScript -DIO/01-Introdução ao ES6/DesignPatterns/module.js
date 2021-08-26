// Antigamente
(function($){
  // code here
})(jQuery)

//Hoje em dia

class Person{
  constructor(name){
    this.name = name;
  }
}

// permite exportar
export default Person;

// e importar para utilizar
import Person from "./module";
