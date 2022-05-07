# SASS - Syntactically Awesome StyleSheets
- É um CSS com super poderes
## Utilidade
- Simplificar e Organizar CSS
- Manutenção
- Rapidez e reuso de código
- Maior compatibilidade com múltiplos navegadores
- Programar: Variáveis, Funções, Repetições, IF/Else ...

## Variáveis
```SCSS
$nome-variavel: valor
```

## Import
```SCSS
@import '_nome-arquivo'
```

## Encadeamento
- Tem escopos
```SCSS
tag{

  tagDentrodaTag{

  }

}
```

## Mixins e Include
- Funções
  - mixin cria a função
  - include chama a função
- Pode passar variáveis
```SCSS
@mixin nomeFuncao($variavel1, $variavel2){

}

tag{
  @include nomeFuncao(valor1, valor2)
}
```

## Condicionais
Exemplo
```SCSS
@mixin box($val){
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
}
```

## Repetições
### for
- through (<=)
- to (<)
```SCSS
@for $i from 1 through 5 {
  .text-#{$i}{
    text-size: 15px * $i;
  }
}

@for $i from 1 to 5 {
  .text-#{$i}{
    text-size: 15px * $i;
  }
}
```

### each
```SCSS
$colors: (color1: blue, color2: red, color3: yellow)

@each $key, $color in $colors{
  .#{$color}-text{
    color: $color;
  }
}
```

###