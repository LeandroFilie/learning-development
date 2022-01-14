# Node.js
Plataforma (runtime) que permite executar JavaScript no servidor

## Características

### Call Stack
Pilha de processamento do código <br/>
A primeira função que entra, é a última a sair

### Single Thread
Tem apenas uma call stack, ou seja, executa uma coisa por vez<br/>
Porém, ao mesmo tempo ele é
  - Non-blocking I/O
  - Executa código assíncrono
Ele consegue isso porque por debaixo dos panos ele roda com a libuv (bib escrita em C)
  - Essa lib implementa diversas coisas, como Thread Pool e Event Loop

```js

console.log('antes')

db.query(query, function callback(err, data){ //função bloqueadora
  console.log(data)
})

console.log('depois')

```

Quando o código chega em uma função bloqueadora, teoricamente ele só poderia rodar o resto quando ela terminasse. Com a libuv, essa função bloqueadora vai para o Thread Pool, liberando a call stack principal. <br/>

Quando a função bloqueadora termina de rodar, a função de callback passada para ela vai para a Callback Queue. Entre a Callback Queue e a Call Stack, tem o Event Loop, que fica vendo se tem algo na Callback Queue e quando encontrar, ele puxa a função de callback para a Call Stack.
