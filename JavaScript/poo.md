# Programação Orientada a Objetos
- É um paradigma de desenvolvimento

### Casos de Uso
- Padrões de projeto
- Organização de código
- Reuso de código
- Separar a complexidade de código, abstrair código e expor de maneira de mais simples
- Classificar rotinas e trechos de código

## Objetos
- Propriedades e funcionalidades
- Estados e comportamentos
- Atributos e métodos

## Classes
- Funcionam como um molde para a criação dos objetos
- Objetos (instancias) são criados a partir de uma classe
- No JS, também é utilizado o prototype

## Encapsulamento
- Agrupamento de funções e variáveis 
- Esconder detalhes de implementação
- Camada de segurança para os atributos e métodos

Exemplo Estrutural
```js
let altura = 50
let largura = 60

function calcArea(){
  return altura * largura
}
let area = calcArea()
```

Exemplo Orientado a Objetos
```js
class Poligono{
  constructor(altura, largura){
    this.altura = altura
    this.largura = largura
  }

  get area(){
    return this.#calcArea()
  }

  // colocar o # significa que essa função não estará disponível fora da classe 
  #calcArea(){
    return this.altura * this.largura
  }
}

let poligono = new Poligono(50, 60)
```

## Herança
Objetos podem herdar ou estender características bases de outros objetos

```js
class Veiculo {
  rodas = 4

  mover(direcao){}
  virar(direcao){}
}

class Moto extends Veiculo{
  constructor(){
    super() //puxa atributos e métodos do pai
    this.rodas = 2;
  }
}
```

## Polimorfismo
Recriar um método da classe herdada
  - Reescrever uma parte do código

```js
class Atleta{
  peso;
  categoria;

  constructor(peso){
    this.peso = peso
  }

  definirCategoria(){
    if(this.peso <= 50){
      this.categoria = 'infantil'
    }
    else if(this.peso <= 65){
      this.categoria = 'juvenil'
    }
    else{
      this.categoria = 'adulto'
    }
  }
}

class Lutador extends Atleta{
  constructor(peso){
    super();
  }
  definirCategoria(){
    if(this.peso <= 54){
      this.categoria = 'pluma'
    }
    else if(this.peso <= 60){
      this.categoria = 'leve'
    }
    else if(this.peso <= 75){
      this.categoria = 'meio-leve'
    }
    else{
      this.categoria = 'pesado'
    }
  }
}
```


## Abstração
Template ou identidade de uma classe que será construída no futuro
- Atributos e métodos podem ser criados na classe de abstração (superclasse)
- A implementação dos métodos e atributos só poderá ser feita na classe que irá herdar essa abstração

```js
class Parafuso{
  constructor(){
    if(this.constructor === Parafuso){
      throw new Error('classe abstrata não pode ser instanciada')
    }
  }

  get Tipo(){
    throw new Error('Método "get tipo()" precisa ser implementado')
  }
}

class Fenda extends Parafuso{
  constructor(){
    super()
  }

  get tipo(){
    return 'fenda'
  }
}

const parafuso = new Parafuso() //classe abstrata não pode ser instanciada

const fenda = new Fenda() //fenda
```