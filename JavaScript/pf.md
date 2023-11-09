# Programação Funcional
Assim como a POO, é um paradigma de programação

## Funções
- Pequenas tarefas dentro de funções
- Abstrair um problema e isolar ele dentro da função
- Não modificam dados fora dela
- Pequenas e específicas no que fazem

### Características
- Um dado entra e um novo dado sai
- Não altera dados
- Não guarda estado (stateless)

## Programação Imperativa e Declarativa
### Imperativa
- Como fazer
- Código pensado e gerado em sequência, como um passo a passo
- Uma coisa depende da outra
- O estado de um dado é alterado constantemente causando mutações nas variáveis
- Orientação a objetos é um tipo de paradigma imperativo
```js
let number = 2
function square(){
  return number * number
}
number = square();
```

### Declarativa
- O que fazer
- Código é gerado para fazer algo, não importa como
- Não há um passo a passo no código
- Programação funcional é um tipo de paradigma declarativo
```js
const square = n => n * n
```

## Imutabilidade
- Uma variável não pode ter seu valor alterado
- Se precisar mudar uma variável, criar uma nova

## Stateless
- Não guarda estado
- A função só conhece dados entregues a ela

## Funções Independentes
- Não pode depender de nada, a não ser aquilo enviado como argumento
- Deverá ter ao menos 1 argumento
- Deverá retornar alto
- Nada que acontece dentro dela afetará o externo
  - Dados imutáveis e não guarda estado
- Não faz o uso de loops, caso necessário, será usada a recursão

## Funções Puras
- Não dependem de nenhum dado externo a não ser o argumento
- Não sofre interferência do escopo externo
- Não muda dados e nem guarda estado

```js
// Função impura
function calculateCircumference(radius){
  return Math.PI * (radius + radius)
}

// Função pura
function calculateCircumference(pi, radius){
  return pi * (radius + radius)
}
```

## First-Class Functions
- Podem estar em qualquer lugar do código, inclusive como parâmetro de outras funções

- A função poderá ser entendida como uma variável
```js
const sayMyName = () => console.log('Leandro')
const runFunction = fn => fn();

runFunction(sayMyName)
```

## Higher-order
- Recebem funções como argumentos
- Poderão retornar outras funções

## Composição de Funções
- Encadeamento de funções

```js
const people = ['Rafa', 'Diego', 'Dani', 'Rod']

const upperCasePeopleThatStartsWithD = people
                                      .filter(person = > person.startsWith('D'))
                                      .map(dperson => dperson.toUpperCase())
```