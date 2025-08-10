# Padrões de Arquitetura de software
Como organizar componentes de software para ser escalável
- Organização de pastas
- Organizaçáo de classes

## Clean Architecture
### Camadas
- Entidades: Onde ficam as regras de negócios
- Use cases (Application services): Classe que organiza o fluxo da regra de negócios
- Controllers: Conectar mundo externo ao use cases
- Infraestrutura: camada mais externa, método que o software vai ficar disponível

## DDD - Domain-Driven Design
- Código deve refletir a realidade

#### Padrões estratégicos
- Linguagem Ubíqua: utilizar conceitos que refletem a realidade. Por exemplo: se o sistema é para alunos, a classe que representa isso deve se chamar "Aluno"
- Contextos delimitados: conjunto de módulos de um mesmo assunto
- Domínio e subdomínio: contexto tem um domínio principal, que é o núcleo da empresa

#### Padrões táticos
- Entidades
- Reporitorios
- Eventos
- Módulos
- Serviços

### Camadas
- User interface: onde o usuário faz a requisição
- Application: onde recebe a requisição
- Domain: onde contem as classes dos padrões táticos, onde o sistema é executado de fato
- Infraestutura: comunicação com os serviços externos. Por exemplo: banco de dados

## SOLID

## Arquitura Hexagonal
- Isolar regra de negócio
  - A regra de negócio conhece somente as "portas de saída"
- Utilizar uma porta para comunicação
  - Portas diferentes tratando de forma diferente cada comunição
- Primary adapters: recebem dados e enviam para a regra de negócio
- Secondary adapters: pegam dados da regra de negócio e devolvem para quem solicitou

## Event-Driven Architecture
- Usado para desacoplar o sistema
- Centralizar a comunicação entre os serviços
  - Os serviços são independentes
- Útil para escalabilidade horizontal (criação de novas instâncias daquele serviço)
- Event Bus: centralizador de eventos
- Utilizando mensageria

### Event sourcing
Toda mudança de status não vai alterar o que já foi feito, na verdade será inserido um novo evento

## Modelagem de eventos
- Descrever como as modificações podem acontecer no sistemas e não apenas as modificações em si

### Etapas
- Brainstorming: Descrever os eventos que vem em mente. Somente os eventos que alteram o estado da aplicação
- Ordenação lógica: organizar os eventos que fazem sentido apra uma história do fluxo no usuário no sistema
- Storyboard: criar interfaces de como os eventos vão acontecer
- Identificando entradas: identificar informações de entrada apra que os eventos possam acontecer
- Identificando saídas: saídas geradas em cada evento
- Lei de conway: Estrutura do sistema = Estrutura da empresa
  - Separar de forma lógica como o sistema vai funcionar de acordo como a empresa funciona
- Elaboração de cenários