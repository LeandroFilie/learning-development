# Fetch
Por baixo dos panos, é uma promise<br />
É uma função usada para interagir com APIs, por exemplo

## Método GET
É o método padrão do fetch
```js
fetch('url')
  .then( response => response.json()) // formatando os dados para o formato JSON
  .then(data => console.log(data)) //pegando os dados do retorno à consulta à API
  .catch(err => console.log('Erro'))
```

```js
fetch('/data.json')
  .then(response => {
    if(response.status === 200){
      return response.json();
    }
    else{
      throw new Error('Request Error');
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log('Erro: ', err);
  })
```

## Método POST PUT e DELETE
```js
fetch('url/id', {
  method: "POST | PUT | DELETE", //método
  body: JSON.stringify(data), //corpo da requisição. o que quer que seja enviado
  headers: {
    "Content-type": "application/json; charset=UTF-8" // o tipo do conteúdo que está sendo enviado
  }
})
  .then()
  .catch()
```

Obs: para o método delete, não é necessário passar o body