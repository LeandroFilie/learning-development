# Helpers
```js
const tech = 'Node.js';
const array = ['Node.js', 'React', 'TypeScript']
```

- Includes: verifica se dentro de uma string ou array existe o parâmetro passado
```js
const includes = tech.includes('.') // retorna true
const includesArray = array.includes('React Native') // retorna false
```

- startsWith: verifica se alguma string começa com uma sequência de caracteres
```js
const startsWith = tech.startsWith('N')
```

- endsWith: verifica se termina com uma sequência de caracteres
```js
const endsWith = tech.endsWith('N')
console.log(endsWith);
```