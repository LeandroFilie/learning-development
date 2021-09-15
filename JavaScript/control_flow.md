# Controle de Fluxo

## if...else
```js
if(condição){
  //bloco de código se condição for verdadeira
}
else{
  //bloco de código se condição for falsa
}
```

Uma boa prática, é colocar as condições em variáveis
- Exemplo:
```js
let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}
```

## Switch
```js
switch(condição){
  case 'a':
    //code here
    break;
  case 'b':
    //code here
    break;
  default:
    //code here
    break;
}
```

## Throw e Try/Catch
Tentar(try) um bloco de código, se der algum erro, será disparado(throw) esse erro e então pode capturar (catch) esse erro

```js

function sayMyName(name = ''){
  if(name === ''){
    throw new Error('Nome é obrigatório') //padrão mais usado
    throw 'Nome é obrigatório' //mas pode ser assim
  }
}

try{
  sayMyName()
}
catch(erro){
  console.log(e)//saida será: 'Nome é obrigatório'
}
```

Throw pode ser usado sem try...catch também, porém, nesse caso, ele dará um erro que ira parar a aplicação