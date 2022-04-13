# Destructuring

## Destructuring em objetos
```js
const user = {
  firstName: 'Leandro',
  lastName: 'Filié',
  full_name: 'Nome Completo',
  age: 23,
  instagram: 'leandro.gf03',
  skills: ['HTML', 'CSS', 'JS']
};

```
Exemplo sem Destructuring
- Tem que atribuir parâmetro por parâmetro
```js
const firstName = user.firstName;
const age = user.age
```

Exemplo com Destructuring
- Pegar valores de dentro de um obj e salvar em uma outra variável
- Pega os valores pelo nome da propriedade
  - Se quiser renomear um dos valores, nomePropriedade: valor
```js
const { firstName, age, skills, full_name: fullName } = user
```

## Destructuring em arrays
- Pega os valores através das posições do array
- Por isso, podemos dar qualquer nome as variáveis
```js 
const [ primary, secondary, tertiary ] = skills
```