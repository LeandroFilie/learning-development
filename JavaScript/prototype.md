# Manipulação de Dados

## Prototype

- JS é chamado de prototype-based language
  - Linguagem baseada em protótipos

- __proto__

- Há uma cadeia de prototypes com diversas funções ja prontas

- Permite a manipulação dos dados

## Type Conversion (typercasting) vs Type Coersion
- Alteração de um tipo de dado para outro dado

### Type Conversion (typercasting)
- A troca acontece explicitamente
Exemplo:
```js
console.log(Number('9') + 5)
//saida: 14
```
### Type Coersion
- O JS faz a troca por baixo dos panos
Exemplo:
```js
console.log('9' + 5)
// Saída: 95
// Transformou o tipo number (5) em string
```

## Manipulação de Strings e Numbers

### Transformar String em Número e Número em String
```js
// String em Número
let string = '123'
Number(string)

// Número em String
let number = 321
String(number)
```

### Contar caracteres e dígitos
String
```js
let word = 'Paralelepipedo'
word.length
```

Number
```js
let number = 1234
String(number).length
```

### Casas Decimais
```js
let number = 234234234.324234234

number.toFixed(NumeroCasas Decimais)

// Trocar ponto pela vírgula
// Ao fazer isso, o numero vira uma string, e não pode ser convertida para o tipo number
number.replace(".", ",");
```

### Letras Minúsculas e Maiúsculas
```js
let word = "Programar é demais"
word.toUpperCase()
word.toLowerCase()
```

### Métodos Split e Join
```js
let phrase = "Eu quero programar"
let myArray = phrase.split(" ") //transforma cada palavra em um item de array
let phraseWithUnderscore = myArray.join("_") //separa os itens do array com o underscore
```

### Encontrar palavras em uma frase
```js
let phrase = "Eu quero programar"
phrase.includes("palavraQueQuerAchar")
// retorno true ou false
// é case sensitive
```

## Manipulando Arrays
Lembrando, uma string também é um array, portanto métodos como include, join, split, também funciona aqui

### Criar Array com constructor
```js
let myArray = new Array('a', 'b');
let myArray = new Array(10); //cria um array com 10 posições vazias
```

```js
let ArrayExemplo = ["HTML", "CSS", "JS"]
```
### Contar Elementos de Array
```js
ArrayExemplo.length
```

### Transformar cadeia de caracteres em array
```js
Array.from(ArrayExemplo) //cada letra virou um item do array
```

### Adicionar item no final
```js
ArrayExemplo.push('item que quer adicionar')
```
### Adicionar item no começo
```js
ArrayExemplo.unshift('item que quer adicionar')
```
### Remover item do fim
```js
ArrayExemplo.pop()
```
### Remover item do começo
```js
ArrayExemplo.shift()
```
### Pegar somente alguns elementos
```js
ArrayExemplo.slice(1, 2)
// Recebe dois argumentos:
  // - A posição de início
  // - A posição final
```
### Remover 1 ou mais itens em qualquer posição do array
```js
ArrayExemplo.splice(indexArray, qtdElementos)
```
### Encontrar a posição de um elemento
```js
ArrayExemplo.indexOf('elemento')
```