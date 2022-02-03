# ReactJS
É uma biblioteca para construção de interfaces (UI's)
  - ReactDOM: para aplicações web
  - React Native: para apps mobile
  - React Native Windows: para apps Windows

React + ReactDOM + React Router -> SPA (Single Page Application)

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

#### @babel/core
É o core do babel

#### @babel/preset-env
Entende quais recursos que são modernos e que transpila o código em que versões antiores conseguem executar

#### @babel/cli
Linha de comando do babel
- Comandos
  - <code>yarn babel [local-não-transpilado] -d [local-transpilado]</code>

### webpack
- É com ele que se torna possível a importação de arquivos de imagens, de folhas de estilo (CSS) dentro de um arquivo JavaScript

- Converte todos os arquivos de componentes e tudo mais em um único bundle.js
  - Tendo somente que importar esse bundle no html