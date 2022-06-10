# Styled Components (CSS-in-JS)
## Características
- Scoped Classes por padrão: nunca terá conflito de classes e estilização
- Legibilidade: não serão utilizadas as tags HTML dentro do componente, mas sim componentes estilizados
- Serve tanto para web (React) como para o mobile (React Native)

## Criar estilos globais
```js
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    background: #222;
    font-family: sans-serif;
    color: #fff;
  }
`;
```

## Criar um componente estilizado
```js
import styled from 'styled-components';

const ItemComponent = styled.tagHTML`
  // code css here
`;
```

```js
import ItemComponent from 'ItemComponent';

function Component(){
  return (
    <ItemComponent>
      // code here
    </ItemComponent>
  )
}
```

- Reutilizar estilos em componentes que necessitam de outra tag
```js
import ItemComponent from 'ItemComponent';

function OtherComponent(){
    return (
      <ItemComponent as="h2">
        // code here
      </ItemComponent>
    )
}
```

- Herdando estilizações de outros componentes
```js
import MainTitle from "../Title";

export const Title = styled(MainTitle)`
  // code css here
`
```

## Props
- Funcionam como as props dos componentes do react 
- Torna possível manipular os estilos do elemento a partir do valor da propriedade passada <br />

Exemplo:
```js
export const Container = styled.article`
  margin-bottom: 24px;
  opacity: ${(props) => props.removed ? 0.5 : 1};
  color: ${(props) => props.removed ? '#f00' : '#fff'}
`;
```

Outra maneira, onde não é necessário ficar chamando as props toda vez
```js
import styled, { css } from "styled-components";

export const Container = styled.article`
  margin-bottom: 24px;
  ${({ removed }) => css`
    opacity: ${removed ? 0.5 : 1};
    color: ${removed ? '#f00' : '#fff'}
`}
`;

```

## Theming
É basicamente o styleguide de um projeto, fazendo com que as informações padrões fiquem em único arquivo e quando seja necessária alguma alteração é só alterar um lugar

### ThemeProvider
- É um provider da ContextAPI

```js
import { ThemeProvider } from 'styled-components';
```

## useTheme
- É um custom hook
- Basicamente o useContext da ContextAPI, porém dentro do useTheme já está sendo passado o contexto
```js
import { useTheme } from 'styled-components';

export default function componente(){
  const theme = useTheme();
}
```

-  Retorna um objeto com os valores do tema dentro dos componentes, não mais apenas somente no styled