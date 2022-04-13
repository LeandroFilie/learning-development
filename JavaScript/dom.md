# DOM - Document Object Model
- É o HTML convertido em JS
  - JS usa a DOM para se conectar ao HTML
    - Com isso, é possível manipular o HTML através do JS
- Estrutura de dados do tipo árvore, criada pelo browser

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

## Navegando pelos Elementos 

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


## Criando e Adicionando Elementos na Página
Exemplo: 
```js
// Criando o elemento
const div = documentCreateElement('div');
div.innerText = 'Conteudo de texto'

// Adicionando o Elemento na página
const body = document.querySelector('body')
body.append(div) //adiciona o elemento após o ultimo filho ja existente

body.preappend(div) //adiciona o elemento primeiro
```

insertBefore
element.insertBefore(insert, antesDesseElemento)
```js
const script = body.querySelector('script')
body.insertBefore(div, script)

// Simulando um insertAfter (que não existe)
const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling)
```


## Eventos

### Adicionando eventos via HTML
'on'+nome do evento

```HTML
<h1 onclick="print()">Título</h1>
```

```js
function print(){
  // code here
}
```

### Eventos de Teclado
```js
const input = document.querySelector('input')

input.onkeypress = function(){
  // code here
}

input.onkeyup = function(){
  // code here
}

input.onkeydown = function(){
  // code here
}
```

### Adicionando eventos via JS
- Método 1
Mais recomendado
```js
elemento.addEventListener('evento','função')

const h1 = document.querySelector('h1');

h1.addEventListener('click', print)

function print(){
  // code here
}
```

- Método 2
Nessa Maneira, é sempre considerada a ultima maneira que encontrar
```js
elemento.onnomeevento

const h1 = document.querySelector('h1');

h1.onclick = print //será ignorado

function print(){
  // code here
}

h1.onclick = function(){
  // code here
}
```


### Argument Event
É um objeto e tem muitos objetos e prototypes
```js
input.onkeypress = function(event){
  //code here
}
```