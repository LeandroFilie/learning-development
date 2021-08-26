(() => {
  this.name = 'arrow function';
  const getNameArrowFn = () => this.name;
  // Arrow Function => this sempre aponta para o local de criação da função

  function getName(){
    return this.name;
    // Function normal => this aponta para onde ela foi executada
  }

  const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName
  }

  console.log(user.getNameArrowFn());
  console.log(user.getName());
})();