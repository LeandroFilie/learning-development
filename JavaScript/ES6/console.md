# Debugging 

console.log padrão
```js 
console.log('Padrão');
```

Mostra uma mensagem de warning
```js 
console.warn('Yellow text with alert');
```

Mostra uma mensagem de erro
```js 
console.error('Red error text');
```

Indica onde o código foi executado
```js 
console.trace()
```

Cria um grupo de console.log
```js 
console.group('New Group')
console.log('Message in group');
console.log('Message in group 2');
console.groupEnd('End My group');
```

Mostra o tempo de execução entre o time e o timeEnd
```js 
console.time('Log time')
setTimeout(() => {
  console.timeEnd('Log time');
}, 2000)
```

Mostra os dados estruturados em uma tabela
```js 
console.table(['Leandro Gomes', 'Digital Innovation One'])
```