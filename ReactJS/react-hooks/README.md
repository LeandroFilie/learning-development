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

### useEffect vs useLayoutEffect

#### Renderização de um Componente
Triggers (gatilhos que quando disparados ocasionam a renderização)
  - Primeiro render
  - Alteração de state
  - ALteração de propriedade <br />

React COMPUTA as alterações <br />

useLayoutEffect -> síncrona <br />

Exibir as alterações para o usuário <br />

useEffect -> assíncrona <br />

O useEffect executa quando o componente já está renderizado, enquanto o useLayoutEffect é executado antes das alterações serem exibidas, e de forma síncrona


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
  - Uma função a ser retornada
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
Memorização de valores. <br />
Diferente do useCallback, que retornada uma função, o useMemo irá executar a função passada.

```js
const total = useMemo(() => {
  return (counter * 219827347 * 328473248 * 2834723048);
}, [counter]);
```

Dessa maneira, o valor do counter não precisará ser recalculado em toda atualização de quaisquer outros states que tenham no componente.

## useRef
### Primeiro Uso
Armazenar valores que podem ser alterados dentro do componente, porém quando esses valores forem alterados, o componente não sofre uma nova renderização. <br />

- Recebe como único argumento o valor inicial

```js
const number = useRef(0)

function handleSetValue(){
  const newNumber = Math.round(Math.random() * (10 - 1) + 1);
  number.current = newNumber;
}
```
O useRef retorna um current, então para manipulá-lo é só seguir o exemplo acima

### Segundo Uso
Acessar elementos da arvore DOM de forma imperativa

```js
const inputRef = useRef(null);

  function handlePrintName(){
    console.log(inputRef.current);
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handlePrintName}>Print Name</button>
    </div>
  )
```

Dessa forma, o que é retornado no current é o elemento html em si, podendo ser manipulado

## useImperativeHandle
Acessar de forma imperativa componentes criados, e não tags HTML, como o useRef faz. <br />

Para isso, precisa fazer o "encaminhamento de referências", usando a função forwardRef
  - Essa função recebe um único parâmetro: o corpo do componente
    - Componente Form usando o forwardRef
      ```js
        const Form = forwardRef((props, ref) => {
        const inputRef = useRef(null);

        useImperativeHandle(
          ref, // a referência
          () => {}, //função, onde seu retorno é o valor que será assumido pela referência. Tudo que for retornado, poderá ser acessado com o .current
          [] // array de dependências
        )

        return (
          <form>
            <input  ref={inputRef}/>
          </form>
        )
      })
      ```

## Custom Hooks
- Usado em conjunto com a extensão 'React Developer Tools'
- São apenas funções javascript que usam os hooks do react
- Assim como os hooks do react, tem que começar com 'use'

### useDebugValue
- Ferramenta para debugar
- É executado dentro dos custom hooks

```js
useDebugValue('Label', (message) => {
  return `Mensagem: ${message}`
});
```

Usado para colocar um label que vai aparecer na frente do nome do hook na extensão.