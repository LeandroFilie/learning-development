# CSS

## Transition
- Propriedade para mudar o comportamento quando há uma mudança na propriedade de um elemento
- O transition faz essa mudança ser feita de forma suave
- Só pode ser usado em propriedades quantificáveis
- Transition só funciona para onde está indo

### transition-property
- Propriedade a ser animada
```css
transition-property: propriedades | all;
```

## transition-duration
- Duração da animação
```css
transition-duration: 1s;
```

### transition-time-function
- Determina o modo de progressão da transição
```css
transition-time-function: ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier()
```

### transition-delay
- Determina um atraso no começo da animação
```css
transition-delay: 1s;
```

## Animation
- Permite criar animações sem a interação do usuário

### keyframes
```css
@keyframes nameAnimation{
  from{} //começo da animação
  to{} //pra onde a animação tem que ir
}

@keyframes nameAnimation{
  0%{}
  25%{}
  50%{}
  75%{}
  100%{}
}
```

### animation-name e animation-duration
```css
animation-name: nameAnimation;
animation-duration: 4s;
```

### animation-delay
- Determina um atraso no começo da animação
```css
animation-delay: 4s;
```

### animation-iteration-count
- Define quantas vezes a animação vai acontecer
- O delay não interfere
```css
animation-iteration-count: numero de vezes | infinite
```

### animation-direction
- Define a direção da animação
```css
animation-direction: reverse | alternate | alternate-reverse
```

### animation-time-function
- Determina o modo de progressão da animação
```css
animation-time-function: linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier()
```

### animation-fill-mode
- Define como a animação aplica os estilos antes e depois da execução
```css
animation-fill-mode: forwards | backwards | both
```