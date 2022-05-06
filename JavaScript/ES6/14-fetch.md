# Fetch
Por baixo dos panos, é uma promise<br />
É uma função usada para buscar dados de APIs, por exemplo

```js
fetch('url')
  .then( response => {
    response.json().then(data => console.log(data)) //pegando os dados do retorno à consulta à API
  })
  .catch(err => console.log('Erro'))
```

```js
fetch('/data.json').then(response => {
  if(response.status === 200){
    return response.json();
  }
  else{
    throw new Error('Request Error');
  }
}).then(data => {
  console.log(data);
}).catch(err => {
  console.log('Erro: ', err);
})
```