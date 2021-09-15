# Estruturas de Repetição

## For
```js
for(inicialização de uma variável; condição de continuação para o loop; expressão final){
  continue; //faz ignorar o resto do código e ir para a próxima repetição
  break; //para a execução do loop e sai dele
}
```

## While
Útil para quando não sabe quantas vezes vai rodas
```js
while(condição){
  //code here
}
```

## For...of
Cria um loop em cima de uma variável ou array
```js
let names = ['Leandro', 'Julia']

for(let name of names){
  console.log(name) //cada vez apresentaria um nome
}
```

## For...in
Cria um loop em cima de um objeto
```js
let person = {
  name: 'Leandro',
  age: 18,
  weight: 72
}

For(let props in person){
  //pega as propriedades
}
```