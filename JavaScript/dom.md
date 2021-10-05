# DOM - Document Object Model

## Selecionando Elementos

### getElementById
```js
document.getElementById('idElemento')
```

### getElementByClassName
```js
document.getElementByClassName('class-elemento')
```

### getElementByTagName
```js
document.getElementByTagName('tag')
```

### querySelector
Pega o primeiro que tiver
```js
document.querySelector('#id')
document.querySelector('.class')
document.querySelector('tag')
```

### querySelectorAll
Pega todos
```js
document.querySelectorAll('#id')
document.querySelectorAll('.class')
document.querySelectorAll('tag')
```

### Qual Usar
HTMLCollection: não aceita diversas funções
- Há pessoas que dizem que querySelector é minimamente mais lento

- getElementById => element
- getElementByClassName => HTMLCollection
- getElementByTagName => HTMLCollection
- querySelector => element
- querySelectorAll => NodeList 

## [Manipulando Conteúdos](Pratica/Exemplos/DOM/index.html)
Todas essas propriedades servem tanto para atribuir, quanto para buscar
### textContent
```js
const element = document.querySelector('elemento')

element.textContent = 'Texto';
```

### innerText
```js
const element = document.querySelector('elemento')

element.innerText = 'Texto';
```

### innerHTML
Aceita Tags
```js
const element = document.querySelector('elemento')

element.innerHTML = '<tag>test</tag>test';
```

### value
Um input, por exemplo, já vai populado
 - Populado é quando ja esta preenchido
```js
const element = document.querySelector('elemento')

element.value = 'qualquerValor';

```

### Atributos
Um input, por exemplo, já vai populado
 - Populado é quando ja esta preenchido
```js
const element = document.querySelector('elemento')

//setar atributo
element.setAttribute('atributo','valor')

//pegar valor do atributo
element.getAttribute('atributo')

//pegar valor do atributo
element.removeAttribute('atributo')
```