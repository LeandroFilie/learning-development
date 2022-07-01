# TypeScript

É um superset do JavaScript, ou seja, da "super poderes" ao JavaScript convencional. <br />

- Tipagem Estática: definir os tipos de variáveis, funções, etc antes da compilação do projeto.

- No final, o TypeScript é compilado para JavaScript.

## Benefícios
- Evitar resultados inesperados, pois como tudo é tipado, há sempre a espera de um determinado resultado

- Ajuda no momento da codificação, exibindo erros, autocompletes, tipos, etc.

- A adoção em projetos pode ser feita de forma gradual, pois arquivos .ts funcionam normalmente com outros arquivos .js.

## Instalação
<code>npm install typescript -D</code>

## Arquivo ts.config
Arquivo usado para definir regras para o typescript

## Tipos
### boolean
- true ou false <br />
```ts
let variable: boolean;
```

### string
- '', "", `` <br />
```ts
let variable: string;
```

### number
- int, float, double <br />
```ts
let variable: number;
```

### array
- É necessário colocar o tipo que terá dentro do array
```ts
let variable: type[];

let variable: Array<type>; //generic
```

### tuple
- Array onde ja se sabe o numero de elementos e o tipo deles
```ts
let variable: [type, type, ...];
```

### enum
- Conjunto de chave/valor
```ts
enum Variable {
  chave = 'valor'
};
```

### any
- "Qualquer coisa", sem tipo
- Não é legal utilizar

### void
- Quando uma função não tem retorno
```ts
function fn(): void{
  //code here
}
```

### null | undefined
- Quando um valor não é definido

### never
- Nunca vai retornar nada <br />
Exemplo:
```ts
function error(): never {
  throw new Error("error");
}
```

### object
- Qualquer coisa que não seja dos outros tipos, é um objeto

## Type Inference
- Typescript já detecta automaticamente o tipo. <br />
Exemplo:
```ts
let message = "Mensagem";
```
- Já ira definir como uma mensagem

## Type Aliases e Union
- Diz que a variável pode ser de um tipo ou outro
```ts
let variable = type | type;
```

### type alias
```ts
type Tipo = type | type;

// Exemplo
type Platform = "Windows" | "Linux" | "MacOs";

let variable: Tipo;
```

- Exemplos mais complexo
```ts
type AccountInfo = {
  id: number;
  name: string;
  email?: string; // colocar o "?", diz que aquela propriedade é opcional
};

const variable: AccountInfo = {
  id: 1,
  name: "Nome",
};
```

#### Intersection
- Junção de dois tipos
```ts
type Tipo1 = {
  chave: type,
};

type Tipo2 = {
  chave: type,
};

type Tipo3 = Tipo1 & Tipo2;

type Tipo4 = Tipo1 & Tipo2 & { chave: valor };
```

## Interfaces
- Descrição de estruturas de objetos
```ts
interface NomeInterface {
  chave: type;
  readonly chave: type; // essa propriedade não poderá ser mudada após ser definida
  chaveFunction: (argumento: type) => void;
}

const objeto: NomeInterface = {
  chave: type;
}
```

### Estendendo Interface
- "NovaInterface" terá todos os tipos do "NomeInterface", além dos novos colocados
```ts
interface NovaInterface extends NomeInterface {
  chave: type;
}
```

## Type Alias vs Interface
- Com o type alias, pode-se passar tipos primitivos. <br />
```ts
type Tipo = string | number;
```
<br />

- Não é possível definir tuplas utilizando as interfaces.

- No type alias só pode-se ter uma declaração por escopo. Na Interface, se houverem duas declarações, ocorre o merge entre as duas interfaces criadas.

- Na criação de libs, é preferível as interfaces, pois são mais extensíveis.

- Quando se trabalhar mais com a POO, utilizar interfaces.

- Na maioria das vezes, usar o type. Só utilizar interfaces se sentir necessidade.

- Ter consistência. Se tiver usando somente interfaces, mantenha.

## Generics

```ts
function fn<S>(){
  // code here
}

function fn<S extends type | type>(){ // dessa forma, só aceitara como parâmetros de tipo os types passados
  // code here
}

function fn<S extends type | type = type>(){ // o type depois do = é o tipo padrão, que se não for passado, será assumido
  // code here
}

const variable = fn<type>()
```

### Símbolos Padrões
- Representa para a função que ela poderá trabalhar com o tipo definido
- S => State
- T => Type
- K => Key
- V => Value
- E => Element

## Type Utilities

### Readonly
- Depois do objeto criado, não será possível modificar nenhum dos valores de suas chaves.
- Conceito da Imutabilidade
```ts
const variable: Readonly<Generic> = {
  chave: valor
}
```

### Partial
- Deixa as propriedades opcionais, mas garante que as propriedades passadas estejam de acordo
```ts
const variable: Partial<Generic> = {
  chave: valor
}
```

### Pick
- Pega as propriedades de outro type

```ts
type Tipo = {
  chave: valor
};

type Tipo2 = Pick<Tipo, 'chave'>
```

### Omit
- Omite as propriedades passadas

```ts
type Tipo = {
  chave: valor
};

type Tipo2 = Omit<Tipo, 'chave'>
```