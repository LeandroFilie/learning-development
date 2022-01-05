# Estrutura de Dados
Uma maneira de organizar informações e registra-las na memória do computador

### Gerenciamento de Dados
1. Modelar a Estrutura
2. Instanciar essa estrutura
3. Criar as funcionalidades dessa estrutura
  - Ex: inserir, excluir, buscar etc

## Arrays
Também chamado de vetor ou arranjo
```js
['a', 10, 'd', true]
```

### Características
- Acesso pelo index
- Respeita a ordem de inserção dos elementos
- Aceita valores duplicados
- No JS, são dinâmicos, ou seja, não precisa definir o tamanho

## Matriz
Vetor multidimensional, ou seja, um array dentro de outro array

## Stack
Como uma pilha de livros
É linear, então o ultimo a entrar será o ultimo a sair
### LIFO: Last In First Out
O ultimo elemento a entrar na pilha, se torna o elemento do topo da pilha, portanto será o primeiro a sair

```js
// Passo 1: modelando
class Stack{
  constructor(){
    this.data = []
    this.top = -1
  }

  push(value){
    this.top++
    this.data[this.top] = value
    return this.data
  }

  pop(){
    if(this.top<0) return undefined
    const poppedTop = this.data[this.top]
    delete this.data[this.top]
    this.top--
    return poppedTop
  }

  peek(){
    return this.top >= 0 ? this.data[this.top]: undefined
  }
}

// Passo 2: utilizando
const stack = new Stack();

stack.push('learning')
stack.push('data')

console.log(stack.peek())

stack.pop();
```

## Queue
- Fila
- O primeiro a entrar é o primeiro a sair

### FIFO: First In First Out
O primeiro elemento a entrar é o primeiro a sair

- Enqueue: entrando na fila
- Dequeue: saindo da fila

```js
class Queue{
  constructor(){
    this.data = []
  }

  enqueue(item){
    this.data.push(item)
  }

  dequeue(){
    this.data.shift()
  } 
}

const fila = new Queue();
```