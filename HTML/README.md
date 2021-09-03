# HTML - HyperText Markup Language
Linguagem de marcação de hipertextos

## Tags
### Elementos
```html
<h1>Título</h1>
```
#### [Ver mais TAGS](tags.md)

### Elementos vazios
Abrem e fecham no mesmo local
```html
  <img src="" alt="" />
  <input type="text" />
```

## Atributos
- Informações extras e/ou configurações
- Boa prática: usar sempre aspas duplas
```html
<!-- Atributos src e alt  -->
  <img src="content" alt="" />
```
### Atributos booleanos
```html
<!-- Campo desabilitado -->
<input type="text" disabled>
```
### Atributos Globais
Class
- Estilos CSS e acessar no JS
```html
<tag class="">
```
Contenteditable
- Permite ou não editar o conteudo
- Perde a modificação após o recarregamento
```html
<tag contenteditable="true|false">
```
data-*
- Após o traço pode colocar qualquer nome
    - Ex: data-list, data-value, etc.
- Muito utilizado no JS
```html
<tag data-id="">
```

Hidden
- Esconde a tag
```html
<tag hidden>
```

ID
- Um único id por página
```html
<tag id="">
```
Style
- Estilo inline
- Pouco utilizado
```html
<tag style="">
```

Tabindex
- Ordenação do Tab na página
```html
<tag tabindex="1">
```

Title
- Define um titulo
```html
<tag title="titulo">
```

### [Outros Atributos](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes)
