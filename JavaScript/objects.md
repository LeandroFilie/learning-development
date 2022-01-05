# Objetos
Sintaxe
```js
const user = {
  name: 'Leandro',
  lastName: 'Gomes Filié'
}
```

## Funções

### Recupera as chaves do objeto
```js
console.log(`Propriedades do objeto user ${Object.keys(user)}`);
```
### Recupera os valores das chaves do objeto
```js
console.log(`Valores das propriedades do objeto user: ${Object.values(user)}`);
```
### Retorna um array de arrays contento [nome_prop, valor_prop]
```js
console.log(`Lista de Propriedades e valores ${Object.entries(user)}`);
```
### Mergear propriedades de objeto
```js
Object.assign(user, {fullName: 'Leandro Gomes Filié'});

console.log('Adiciona a propriedade fullName ao objeto user', user);
console.log('Retorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 18}));
```
### Previne todas as alterações em um objeto
```js
const newObj = {prop: 'teste'};
Object.freeze(newObj);

newObj.prop = 'changes';
delete newObj.prop;
newObj.teste = 'prop';

console.log('Variável newObj após as alterações', newObj);
```
### Permite apenas a alteração de propriedade existentes em um objeto
```js
const person = { name: 'Leandro' };
Object.seal(person);

person.name = 'Leandro Gomes'
delete person.name;
person.age = 18;

console.log('Variável person após as alterações', person);
```