# ReactJS
É uma biblioteca para construção de interfaces (UI's)
  - ReactDOM: para aplicações web
  - React Native: para apps mobile
  - React Native Windows: para apps Windows

React + ReactDOM + React Router -> SPA (Single Page Application)

### Create React App
- É uma ferramenta para criação de aplicações em react
- Coloca uma camada de abstração nas configuração de babel, webpack e todo o setup necessário para a aplicação funcionar
  - Além disso, já cria toda uma estrutura de pastas

<code>yarn create react-app my-app</code>
<code>npx create-react-app my-app</code>

## Virtual DOM
- É uma representação virtual da DOM mantida em memória e sincronizada com a DOM real, utilizando o ReactDOM. Essa sincronização é chamada de reconciliação.

- O React utiliza para saber o que mudou e o que não mudou entre as renderizações de um componente.

Não se pode acessar os elementos igual acessa-se com o JavaScript, com o <code>document.getElementById</code> por exemplo, pois a Virtual DOM perde a sincronização com a DOM real.

## Componentes
São partes de algo maior, que quando se juntam em uma ordem lógica, formam esse algo
- São isolados
- No react, todos os componente precisam começar com letra maiúscula

## JSX
Escrever código HTML dentro do JavaScript

```js
import React from 'react';

function App() {
  return <h1>Componente Funcional</h1>
}
```

```js
import React from 'react';

class App extends React.Component{
  render(){ // método obrigatório
    return <h1>Componente de Classe</h1>
  }
}
```

### Babel
Transpila o código jsx em uma versão que o navegador consiga entender

- @babel/core: É o core do babel

- @babel/preset-env: Entende quais recursos que são modernos e que transpila o código em que versões anteriores conseguem executar

- @babel/cli: Linha de comando do babel
  - Comandos
    - <code>yarn babel [local-não-transpilado] -d [local-transpilado]</code>

### webpack
- É com ele que se torna possível a importação de arquivos de imagens, de folhas de estilo (CSS) dentro de um arquivo JavaScript

- Converte todos os arquivos de componentes e tudo mais em um único bundle.js
  - Tendo somente que importar esse bundle no html

### Expressões JS no JSX
Basta apenas encapsular o conteúdo por chaves

```js
const noticia = 'Noticia';

{noticia}
```

## React Fragment
O react não aceita que um componente retorne tags adjacentes, como isso:
```js
function App(){
  return(
    <h1>Titulo</h1>
    <h2>Subtitulo</h2>
  )
}
```

Para contornar isso podemos encapsular em uma div ou em outra tag qualquer, porém pode atrapalhar na hora de estilizar, por isso existe o React Fragment, que há dois jeitos de usá-lo:

- Usar esse método caso seja necessário passar alguma propriedade
```js
import React from 'react';

function App(){
  return(
    <React.Fragment propriedade="conteudo">
      <h1>Titulo</h1>
      <h2>Subtitulo</h2>
    </React.Fragment>
  )
}
```

- Caso não seja necessário passar propriedade, podemos usar a shot syntax
```js
function App(){
  return(
    <>
      <h1>Titulo</h1>
      <h2>Subtitulo</h2>
    </>
  )
}
```

## Props
É uma forma de passar valores de um componente pai para um componente filho <br />

Componente App
```js
<Post title="Titulo do post"/>
```

Componente Post <br />
  - Recebe todos os valores passados como atributos no momento que adicionamos o componente
```js
function Post(props){
  return <h2>props.title</h2>
}
```

<strong>Um componente filho não pode alterar o valor de uma propriedade</strong>

### Prop Children
É tudo que é passado dentro dos componentes

Componente App
```js
<Post>
  <h2>Esta é a prop children</h2>
</Post>
```

Componente Post
```js
function Post(props){
  return (
    <>
      <h1>Notícia</h1>
      {props.children} {// será <h2>Está é a prop children</h2>}
    </h2>
  )
}
```

### Tipando as props sem TypeScript
- Instalar o pacote prop-types

```js
NomeComponente.propTypes = {
  chave: PropTypes.[tipo].[isRequired]
}
```


## Context API
A Context API surgiu para resolver o problema de Prop Drilling, ou seja, a ação de passar um valor por vários níveis de componentes

A Context API cria um contexto de informações, através do Provider, que são as informações que queremos compartilhar com outros componentes. Todos os componentes abaixo do provider conseguem acessar o valor passado.


Arquivo ThemeContext.js
```js
import React, { createContext } from "react";

export const ThemeContext = createContext('valorInicial'); //criando um contexto

export function ThemeProvider(props) {
  return(
    <ThemeContext.Provider value={}>
      {props.children}
    </ThemeContext.Provider>
  )
}
```

Componente App
```js
import React, { useContext } from "react";
import { ThemeContext } from './ThemeContext',

<ThemeContext>
  <h2>Dentro do contexto</h2>
</ThemeContext>
```

Componente Usando o Contexto
```js
import React, { useContext } from "react";
import { ThemeContext } from './ThemeContext',

const ThemeContext = useContext(ThemeContext); //usando um contexto
```

## [React Hooks](./react-hooks/README.md) e Lifecycle
- Hooks são funções prontas do react que se iniciam com a palavra "use".

### Lifecycle
- Ordem em que as coisas acontecem no componente até ele chegar a tela do usuário
- Para manipular o ciclo de vida de um componente, é usado os hooks useEffect ou o useLayoutEffect

## [React Router Dom v5](./react-router-dom/README.md)
- Responsável pelas rotas no react

## [Styled Components](./styled-components/README.md)
- Css in JS

## Estilização no React

### Inline
Há apenas uma mudança na sintaxe, que as propriedades passam a ser camel case e são passadas através de um objeto
```js
style={{
  background: '#ccc',
  marginTop: '10px',
}}
```

### Arquivos CSS externos
- É necessário configurar um loader no webpack
  - Instalar os pacotes css-loader e style-loader e colocar no arquivo webpack.config.js
  ```js
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
  ```
    - Obs: importante passar o style-loader antes do css-loader

```js
import './index.css';
```

### CSS Modules
- Útil para evitar conflito de classes dentro da aplicação
- Os CSS Modules geram um nome totalmente aleatório para as classes
  - Cada classe de cada arquivo ganha uma hash, então mesmo que se tiver dois arquivos com uma mesma classe não haverá conflito <br />

Arquivo webpack.config.js
```js
{
  test: /\.css$/,
  use: [
    'style-loader', 
    {
      loader: 'css-loader',
      options: {
        modules: true,
      }
    },
  ],
},
```

Com isso, fica assim para usar no componente
```js
import styles from './Header.css';

function Componente(){
  return <h2 className={styles.nome-da-class}>Conteúdo</h2>
}
```

### SASS e SASS Modules
- Tem que instalar os pacotes do 'sass' e o 'sass-loader' e configurar no webpack

```js
{
  test: /\.scss$/,
  use: [
    'style-loader', 
    {
      loader: 'css-loader',
      options: {
        modules: true,
      }
    },
    'sass-loader',
  ],
},
```

## React Portals
- Cria uma div irmã a div root para, por exemplo, o uso de modais

```js
import ReactDOM from 'react-dom';

export default function Component(){
  return ReactDOM.createPortal(
    <tag>Componente em si</tag>,
    getElementById('modal-root')
  );
}
```

- O primeiro argumento passado para a função createPortal é o componente que vai ser renderizado.
- O segundo argumento é em elemento do HTML esse elemento será renderizado

## Formulários no React
### Controlled Components
- Campos do formulário onde a responsabilidade de controlar o valor desse componente são do React.
- O método mais usado é a criação de um estado para cada campo de input.

```js
function Component(){
  const [ field, setField ] = useState('');

  return (
    <input 
      type="text"
      value={field} //isso faz com que o elemento seja controlled component
      onChange={(event) => setField(event.target.value)} 
    >
  )
}
```

- One-way data binding: "única fonte de dados", no caso, a única fonte de dados do exemplo acima, é o estado. O estado é a Single Source of Truthy, ou seja, a única fonte de verdade.

- Two-way data binding: DOM e state sincronizados. Mais usado em frameworks como Vue e Angular.

- Usado para trabalhar com formulários simples, pois a cada atualização de estado, o component inteiro é remontado.

### Uncontrolled Components
- Campos do formulário onde a responsabilidade de controlar seu valor é da própria DOM, e não do React.

- Com isso, o React precisa acessar de alguma forma o valor do input, para isso é utilizado o hook <code>useRef</code>

```js
function Component(){
  const fieldInput = useRef(null);

  return (
    <input 
      defaultValue="Valor Padrão"
      type="text"
      ref={fieldInput}
    >
  )
}
```

- Não renderiza a cada letra que o usuário digita, assim como os Controlled Components

- Mesmo sendo um Uncontrolled Component, os event listeners funcionam