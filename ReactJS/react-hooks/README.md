# React Hooks
Uma regra é que tem que ser criado no corpo do componente, não pode ser dentro de uma função que está dentro do componente por exemplo. Tem que ser diretamente no componente

### useState
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

### useEffect
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


### useContext


### useReducer


### useCallback


### useMemo


### useRef


### useImperativeHandle


## Custom Hooks


### useDebugValue