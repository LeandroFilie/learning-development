# Rest Operator

### Sem Rest Operator

```js
function sum(a, b){
  var value = 0;

  for(let i = 0; i < arguments.length; i++){
    value += arguments[i];
    //arguments retornam um objeto
  }

  return value;
}

console.log((sum(1, 2, 3, 4, 5)));
```

### Com Rest Operator
- rest retorna um array, que vem junto com os métodos de array
- SEMPRE PRECISA SER A ULTIMA VARIÁVEL

Exemplo
```js
function sum2(...args){
  return args.reduce((acc, value) => acc + value, 0);
}
console.log((sum2(1, 2, 3, 4, 5)));
```

Exemplo
```js
const sum4 = (a, b, ...rest) => {
  console.log(a, b, rest);
  //pega os dois primeiros valores e o resto coloca em um array
}
sum4(1, 2, 3, 4, 5);
```

Exemplo
```js
const user = {
  firstName: 'Leandro',
  lastName: 'Filié',
  full_name: 'Nome Completo',
  age: 23,
  instagram: 'leandro.gf03',
  skills: ['HTML', 'CSS', 'JS']
};

const { firstName, skills, ...restoUser } = user
const [ primary, ...restoSkills ] = skills

console.log(firstName, primary);
console.log(restoUser);
console.log(restoSkills);
```

# Spread Operator
- Pode ser utilizado em strings, arrays, literal objects e objects iteraveis
- não precisa estar no final, como o resto, só se atentar na regra abaixo: 
  - se um objeto tiver duas propriedades com o mesmo nome, o ultimo é o que prevalece

```js
const user = {
  firstName: 'Leandro',
  lastName: 'Filié',
  age: 23,
  instagram: 'leandro.gf03',
  skills: ['HTML', 'CSS', 'JS'],
  active: false
};

user.active = true; //desse modo, fere-se o conceito de imutabilidade

```

- Clone as informações em um novo objeto e ai sim faça as alterações

- Exemplo sem spread operator
```js
const updatedUser = {
  firstName: user.firstName,
  lastName: user.lastName,
  age: user.age,
  instagram: user.instagram,
  skills: user.skills,
  active: true
}
```

- Exemplo com spread operator
```js
const updatedUserWithSpread = {
  ...user,
  skills: [...user.skills, 'React'],
  active: true 
}
```