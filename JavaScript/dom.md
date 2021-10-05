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


## [Manipulando Estilos](Pratica/Exemplos/DOM/index.html)
```js
const element = document.querySelector('elemento')

// Como se fosse o estilo inline
// O nome das propriedades css agora é em camelCase. Ex: marginTop
element.style.backgroundColor = 'red'
```

### classList
Retorna um DOMTokenList


```js
const element = document.querySelector('elemento')

element.classList

element.classList.add('classe-a-ser-adicionada')
element.classList.remove('classe-a-ser-removida')
element.classList.toggle('nome-class')
```
- O toggle funciona assim:
  - se a classe existir ele tira
  - se a classe não existir, ele adiciona

## [Navegando pelos Elementos](Pratica/Exemplos/DOM/index.html) 

### parentElement e parentNode
- Pega o elemento pai
```js
const element = document.querySelector('elemento')

element.parentNode
element.parentElement
```

### Elementos Filhos
```js
const element = document.querySelector('elemento')

//Pega todos os filhos em formato de NodeList
element.childNodes

//Pega todos os filhos em formato de HTMLCollection
element.children

// Leva em conta o espaço vazio
element.firstChild
element.lastChild

// Pega a primeira/ultima tag filha
element.firstElementChild
element.lastElementChild
```

### Elementos Irmãos
- nextSibling
```js
const element = document.querySelector('elemento')

// nextSibling/previousSibling => leva em conta o espaço vazio
element.nextSibling
element.previousSibling

// nextElementSibling/previousElementSibling => não leva em conta o espaço vazio
element.nextElementSibling
element.previousElementSibling
```

