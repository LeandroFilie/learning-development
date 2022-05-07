# Axios
Biblioteca baseada em promises para interagir com APIs

## Método GET
```js
axios.get('url')
  .then(response => console.log(response))
  .catch(error => console.log(error))
```

## Método POST
```js
axios.post('url', data)
  .then(response => console.log(response))
  .catch(error => console.log(error))
```

## Método PUT
```js
axios.put('url/id', updatedData)
  .then(response => console.log(response))
  .catch(error => console.log(error))
```

## Método DELETE
```js
axios.delete('url/id', updatedData)
  .then(response => console.log(response))
  .catch(error => console.log(error))
```