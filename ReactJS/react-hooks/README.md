# React Hooks
Uma regra é que tem que ser criado no corpo do componente, não pode ser dentro de uma função que está dentro do componente por exemplo. Tem que ser diretamente no componente

## useState
States em componentes funcionais. <br />
```js
const [ name, setName ] = useState('Leandro')
```

- name: valor inicial do estado
- setName: função que altera o valor do estado
- useState(valorInicial): valor inicial será atribuído ao name
  - para alterar o valor sem fazer um 'setName'
    ```js
      - useState(() => {
        return 'estado inicial';
      });
    ```

Obs: se a atualização do valor do estado depender do valor anterior, usar a variável prevState, dentro da função set.

```js
const [counter, setCounter] = useState(0);

function handlePlus(){
  useState((prevState) => prevState + 1)
}
```

prevState representa o valor no momento em que o react está fazendo a atualização do estado

## useEffect
Manipula o lifecycle do react

```js
useEffect(() => {
  console.log('useEffect Rodou');
}, []);
```

[]: array de dependências
  - Caso deixe vazio, a função dentro do useEffect será executada toda vez que o componente for renderizado em tela
  - Caso tenha uma variável, a função será executada toda vez que o valor dessa variável mudar
  - Caso seja uma função, a função do useEffect será executada toda vez que a função for remontada
  - Obs: pode ter mais de uma coisa dentro do array de dependências
- Toda variável usada dentro da função do useEffect tem que estar listada no array de dependências

- Fazer chamadas assíncronas dentro do useEffect:
  - usar o fetch, com .then
  ```js
  useEffect(() => {
    fetch()
    .then()
  }, []);
  ```

  - criar uma function async/await dentro e executar

  - criar uma IIFE: Immediately Invoked Function Expression
    - Uma função criada e autoexecutada
    ```js
      (async () => {
        //code here
      })();
    ```

- Executar uma função no momento que o componente for sair de tela
```js
  useEffect(() => {
    //code here

    return () => {
      // code here (componentWillUnmount)
    }
  })
```


## useContext
- Criando contexto
```js
import React, { createContext } from "react";

const ThemeContext = createContext();

function ExampleUseContext () {
  <ThemeContext.Provider value={{ mode: 'dark' }}>
    <Button></Button>
  </ThemeContext.Provider>
}

```

- Usando o contexto
```js
function Button () {
  const theme = useContext(ThemeContext)
  return (
    <button>
      {theme.mode}
    </button>
  )
}

```
Mais sobre a Context API do react, [clique aqui](../README.md#context-api)

## useReducer
- Forma de manipular um ou mais estados ao mesmo tempo a partir de um disparo de eventos

```js
function reducer(state, action){}

const initialValue = {
  counter: 0,
  clicks: 0,
}

const [ state, dispatch ] = useReducer(reducer, initialValue);
```

- O primeiro argumento da função do useReducer é uma função
  - Essa função recebe o state e o action
    - action: são os argumentos passados na hora da chamada da função
    - state: é o valor atual do estado
- O segundo argumento é o estado inicial, que pode ser de qualquer tipo
- O terceiro parâmetro é outra função, chamada initializer, que recebe como parâmetro o valor passado como segundo argumento do useReducer
  - Executa somente uma vez; quando o componente é montado na tela
  - retorna um valor que será de fato o valor inicial do useReducer
  - Pouco usado no dia-a-dia

- dispatch vai executar a função passada como primeiro argumento no useReducer
  - Sempre precisará retornar algo, que será o state atualizado
  - essa função dispatch aceita parâmetros, que serão acessados pela variável action

## useCallback
Uma função dentro de um componente é memorizada novamente a cada nova alteração no componente. Para resolver isso, tem o useCallback <br />

O useCallback recebe dois parâmetros
  - Uma função a ser executada
  - Um array de dependências, que funciona semelhante ao do useEffect. Toda vez que o valor alterar, a função é memorizada novamente

```js
const handlePlus = useCallback(() => {
  setCounter((prevState) => prevState + 1);
}, [])
```

OBS: NÃO USAR EM TODAS AS FUNÇÕES, MEMORIZAÇÃO TAMBÉM TEM UM CUSTO <br />

#### Quando Usar?
Quando for necessário passar uma função para componentes filhos, as chamadas funções de callback

## useMemo


## useRef


## useImperativeHandle


## Custom Hooks


### useDebugValue