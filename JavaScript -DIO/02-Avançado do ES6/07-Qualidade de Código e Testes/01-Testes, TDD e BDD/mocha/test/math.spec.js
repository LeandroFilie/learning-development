const assert = require('assert');
const Math = require('../src/math.js');

let value = 0;

describe('Math class', function(){ // não é usado arrow function para poder ter acesso ao this do escopo
  //hooks
  beforeEach(function () { //antes de cada it, isso roda
    value = 0
  })
  
  it('Sum two numbers', function(done){
    const math = new Math();
    this.timeout(3000);
    //o tempo padrão dos testes é de 2000ms
    // utilizando uma função, e não uma arrow function, pode-ser ter acesso ao this deste escopo e alterar este tempo

    value = 5
    math.sum(value, 5, (value) => {
      assert.equal(value, 10)
      done(); //recurso do mocha para funções assíncronas
    })
    
  })

  it('Divider two numbers'); //pode escrever testes em que a função ainda não está pronta
  
  it('Multiply two numbers', function () {
    const math = new Math();

    assert.equal(math.multiply(value,5), 0)

  });

  it.skip('Skip test');
})