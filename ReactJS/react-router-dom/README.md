# React Router v5

### Instalação
<code>yarn add react-router-dom</code>

### Criação de Rotas
- Rotas também são componentes
- O componente Route é usado para definir as rotas
  - Propriedade path: o caminho da rota 
  - Propriedade component: o componente a ser renderizado quando o usuário estiver naquela rota
  Propriedade exact: verifica se a rota é exatamente igual ao path
- É necessário que um Router esteja envolvendo as routes (ver documentação para caso)
  - Na maioria dos casos, é usado o BrowserRouter
```js
import { Route } from 'react-router-dom';

function componente(){
  <BrowserRouter>
    <Route exact path="/" component={Componente}/>
  </BrowserRouter>
}
```

- O webpack cuida das rotas de um jeito parecido com o node, então temos que apontar para que toda vez que seja escrita uma rota na url, seja responsabilidade do front-end ir para essa rota.
  - Arquivo webpack.config.js -> na parte de devServer, adicionar: "historyApiFallback: true,".

#### Pagina 404
- Criar um componente para aparecer quando a rota não for encontrada
- Deixar o componente sem o path
```js
import { Switch, Route } from 'react-router-dom';

function componente(){
  <Switch>
    <Route exact path="/" component={Componente}/>
    <Route component={NotFound} />
  </Switch>
}
```

- Envolvendo tudo pelo componente Switch, somente uma rota será renderizada

### Navegando para uma rota
- O componente Link substitui a tag "a"
  - Por baixo dos panos, renderiza uma tag "a"
```js
import { Link } from 'react-router-dom';

<Link to="path"></Link>
```

### Passar e receber parâmetros
- Dentro do arquivo webpack.config.js, adicionar "publicPath: '/'," no output

Componente Routes
```js
function Routes(){
  <Switch>
    <Route exact path="/" component={Componente}/>
    <Route exact path="/posts" component={Posts}/>
    <Route exact path="/posts/:id" component={Post}/>
    <Route component={NotFound} />
  </Switch>
}
```

Outro Componente
```js
import { useParams, useLocation } from 'react-router-dom';

function componente(){
  const params = useParams();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  console.log(params);
  console.log(queryParams.get('meuQueryParam'));
}
```

- useParam: Retorna um objeto com todos os parâmetros do arquivo de rotas

- useLocation: retorna um objeto com a propriedade search, que é o queryParam
  - Instanciando a classe URLSearchParams, é retornado o valor do queryParam passado como argumento

### Navegação Programática
```js
import { useHistory } from 'react-router-dom';

function Componente(){
  const history = useHistory();

  history.push('path')
}
```

### Animar transição entre rotas
Instalar <code>yarn add react-spring</code><br />

Componente Routes
```js
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

function componente(){
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {}, //antes de entrar na dela
    enter: {}, //quando entrar na tela
    leave: {}, //quando estiver saindo da tela
  })

  return transitions((props, item) => (
    <animated.tagHTML style={props}>
      <Switch location={item}>
        <Route exact path="/" component={Home}/>
        <Route exact path="/posts" component={Posts}/>
        <Route path="/posts/:id" component={Post}/>
        <Route component={NotFound} />
      </Switch>
    </animated.tagHTML>
  ));
}
```