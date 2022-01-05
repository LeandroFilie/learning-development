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

## Forms

### Atributos no Input
- type
- autocomplete: dados ja usado muitas vezes
    - "on": sugestão de nwe-password ou current-password"
    - "off": desabilita o autocomplete
    - "new-password": navegador sugere uma nova senha
- autofocus: input focado quando a página carregar
  - Pode apenas um por página
- disabled
- value
- readonly (não são todos os tipos)
- form: linkar o input com um form, através do id (não são todos os tipos)
- name
- required (não são todos os tipos)
- placeholder (password, search, tel, text, url e outros)
- min/maxlength
- size
- pattern: usa expressões regulares para validar o campo
- title: aparece na mensagem de aviso
- inputmode="numeric": abre só o teclado numérico no celular, por exemplo
- multiple: : permite colocar um ou mais itens separados por vírgulas
- list: é linkado a um datalist
- spellcheck: verifica ortografia

### Types Input
- password
  - min/maxlength
  - size
  - pattern
  - title
  - placeholder
  - required
  - inputmode
  - autocomplete

- email
  - email@dominio.com
  - placeholder
  - readonly/disabled
  - required
  - multiple
  - min/maxlength
  - size
  - pattern
  - list

- url
  - placeholder
  - readonly/disabled
  - required
  - value
  - min/maxlength
  - pattern
  - list
  - spellcheck

- file
    - value: arquivo a ser enviado
    - accept
      - Exemplo: .doc, .docx, image/png, image/* etc
    - multiple
    - <form enctype="multipart/form-data">

- color
  - seleção de cores (colorpicker)
  - list

- checkbox
  - globais
  - value
  - checked

- hidden
  - invisível

- radio
  - seleciona uma única opção
  - checked
  - value

- textarea
  - textos longos
  - id
  - name
  - rows e cols
  - maxlength e minlength
  - wrap
    - wrap="off"
      - não há quebra de linha automática
  - outros comuns

- select
  - multiple
  - size: qtd opções visíveis
```HTML
<select>
  <optgroup label="Grupo 1">
    <option value="1">1</option>
  </optgroup>
    <optgroup label="Grupo 2">
    <option value="2">2</option>
  </optgroup>
<select>
```

- search
  - list
  - pattern
  - aria-label: opção quando não se há o label

- number
  - min/max
  - step

- range
  - slider para selecionar um valor numérico

- date/time/datetime-local

### Datalist
Opções que aparecem para o usuário
- Ele não é obrigado a escolher um valor que ja esta na lista, é apenas uma sugestão

```HTML
<input type='text' list="fruitsdata" />

<datalist id="fruitsdata">
  <option>Fruta 1</option>
  <option>Fruta 2</option>
  <option>Fruta 3</option>
  <option>Fruta 4</option>
</datalist>
```