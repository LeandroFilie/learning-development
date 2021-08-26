console.log('Padrão');

console.warn('Yellow text with alert');

console.error('Red error text');

console.trace()//indica onde o código foi executado

console.group('New Group')
console.log('Message in group');
console.log('Message in group 2');
console.groupEnd('End My group');

console.time('Log time')
setTimeout(() => {
  console.timeEnd('Log time');
}, 2000)

console.table(['Leandro Gomes', 'Digital Innovation One'])