# Projetos Ágeis
Software é construído por partes e cada parte executa-se em um ciclo
- Partes de do máximo 30 dias

### Características
- Escopo definido ao longo do projeto ⇒ adaptativo
- Projeto controlado por funcionalidades entregues
- Cliente pode ver parte do software funcionando já na parte inicial do projeto
- Mudanças constantes de acordo com feedbacks
  - Descobre que estava errado no máximo em 30 dias
- Ágil não quer dizer rápido
  - Ter capacidade de responder rapidamente às mudanças
    - Dividir coisas complexas em coisas simples
  - Equipe mais comprometida com os objetivos
  - Maior valor para o cliente

# SCRUM
Um dos frameworks de gerenciamento de projetos ágeis.
O framework Scrum é propositalmente incompleto, apenas definindo as partes necessárias para implementar a teoria Scrum. O Scrum é construído sobre a inteligência coletiva das pessoas que o utilizam. Em vez de fornecer às pessoas instruções detalhadas, as regras do Guia do Scrum orientam seus relacionamentos e interações.

### Pilares
- Transparência: O processo emergente e o trabalho devem ser visíveis tanto para quem executa o trabalho
quanto para quem recebe o trabalho;

- Inspeção: Os artefatos do Scrum e o progresso em direção às metas acordadas devem ser inspecionados com frequência e diligência para detectar variações ou problemas potencialmente indesejáveis;

- Adaptação: Se algum aspecto de um processo se desviar fora dos limites aceitáveis ou se o produto resultante for inaceitável, o processo que está sendo aplicado ou os materiais que estão sendo produzidos devem ser ajustados.

### Valores
Compromisso, Foco, Abertura, Respeito e Coragem

### Características
- Conversar mais e escrever menos ⇒ escrever apenas o necessário
- Demonstrar o software constantemente para receber feedback dos usuários
- Adaptar o software rapidamente
- Aprender progressivamente com o uso do software

## SCRUM Team
- Equipes capazes de se auto-organizarem
- Tarefas são do time e todos são responsáveis
- Forte comprometimento com os resultados (Meta do Produto)
- Não há sub-times ou hierarquias
- Normalmente, conta com 10 pessoas ou menos

### Product Owner
- Representante da área de Negócios
  - PO é uma pessoa, não um comitê
- Define as funcionalidades do software (Product Backlog)
  - Desenvolver e comunicar explicitamente a meta do produto;
  - Criar e comunicar claramente os itens do Product Backlog;
  - Ordenar os itens do Product Backlog; e,
  - Garantir que o Product Backlog seja transparente, visível e compreensível.
- Prioriza as funcionalidades de acordo com o valor do negócio
- Explica o que o time de desenvolvimento precisa fazer

### Scrum Master
- Garante o uso correto do SCRUM a partir do Guia do Scrum
- Não é gerente de projetos, não delega as atividades
- Age como facilitador, auxilia o PO a explicar para o time
  - Auxilia o PO no planejamento e estimativas de Backlog
  - Auxilia a equipe a remover impedimentos
- Treina o time em autogerenciamento e interdisciplinaridade

### Developers
- Possui habilidades suficientes para desenvolver, testar, criar e desenhar
- Tudo que for necessário para entregar o software funcionando

## Eventos Scrum

### Sprint
- O coração do Scrum
- Time Box: tempo máximo para fazer uma cerimônia ou sprint
  - Dura no máximo 30 dias corridos (o próprio time define o tempo)
- Uma nova Sprint começa imediatamente após a conclusão da Sprint anterior
- Nenhuma mudança é feita que coloque em risco a meta da Sprint;
- A qualidade não diminui;
- O Product Backlog é refinado conforme necessário; e,
- O escopo pode ser esclarecido e renegociado com o Product Owner conforme mais é
aprendido.
- Uma Sprint pode ser cancelada se a Meta da Sprint se tornar obsoleta
  - Apenas o Product Owner tem autoridade para cancelar a Sprint. 

### Sprint Planning
- Define o trabalho a ser realizado na sprint
- Por que esta Sprint é valiosa? 
- O que pode ser feito nesta Sprint?
- Como o trabalho escolhido será realizado? 
- Tem um Timebox definido com duração máxima de de 8 horas para uma Sprint de um mês. Para Sprints mais curtas, o evento geralmente é mais curto. 

### Daily Scrum
O propósito da Daily Scrum é inspecionar o progresso em direção a Meta da Sprint e adaptar o Sprint Backlog conforme necessário, ajustando o próximo trabalho planejado
- Todos do time participam
- Time dev responde 3 perguntas: 
  - “O que fez no dia anterior?"
  - “O que está programado para hoje?”
  - “Se tem algum impedimento?"
- Feita de pé para ser rápida
  - Evento de 15 minutos, aproximadamente
- Todos os dias no mesmo horário e lugar
- As Daily Scrums melhoram as comunicações, identificam os impedimentos, promovem a rápida tomada de decisões e consequentemente, eliminam a necessidade de outras reuniões. 


### Sprint Review
- O propósito da Sprint Review é inspecionar o resultado da Sprint e determinar as adaptações futuras
- Último dia da Sprint, porém é o penúltimo evento
- Scrum Tema apresenta os resultados de seu trabalho para os principais stakeholders
- Timebox com prazo máximo de 4 horas para uma Sprint de um mês

### Sprint Retrospective
- Também no último dia
- Reunião para as lições aprendidas (pontos positivos e negativos, etc)
- Timebox de no máximo três horas para uma Sprint de um mês.

## Scrum Artifacts 
### Product Backlog
O Product Backlog é uma lista ordenada e emergente do que é necessário para melhorar o produto. É a única fonte de trabalho realizado pelo Scrum Team. <br />
Os Developers que farão o trabalho são responsáveis pelo dimensionamento. O Product Owner pode influenciar os Developers, ajudando-os a entender e selecionar trade-offs (trocas de itens). <br />

Compromisso: Meta do Produto
  - descreve um estado futuro do produto que pode servir como um alvo para o Scrum Team planejar

### Sprint Backlog
O Sprint Backlog é composto pela Meta da Sprint (por que), o conjunto de itens do Product Backlog  selecionados para a Sprint (o que), bem como um plano de ação para entregar o Incremento (como). <br />

Compromisso: Meta da Sprint 
  - é criada durante o evento Sprint Planning e então adicionada ao Sprint Backlog.

## Incremento
Cada incremento é adicionado a todos os incrementos anteriores e completamente verificado, garantindo que todos os incrementos funcionem juntos. A fim de fornecer valor, o incremento deve ser utilizável. <br />

Compromisso: Definição de Pronto 
  -  é uma descrição formal do estado do Incremento quando ela atende às medidas de qualidade exigidas para o produto. 

## Conceitos e Planejamentos

### Estória e Tarefas
- Estória: conjunto de tarefas
- Épico: conjunto de estórias

### Estória
- Tarefa descrita em nível de negócio
- Nome da Estória
- Descrição (Eu, como, quero, quando)
- Regras de Negócio (Separar regras de Front-End de Regras de Back-End)
- Tela (link ou imagem das telas a serem desenvolvidas)
- KPI (objetivos/valor a estória precisa atingir)
- Tagueamento (como a estória será “Tagueada” para poder mensurar os KPI)
- Critérios de Aceite (passo a passo de todos os caminhos felizes possíveis a estória deve cumprir para que ela seja considerada aceita)

### Tarefa
- Conjunto de atividades que o time dev deve desempenhar para entregar a estória

### BackLog
- Local onde ficam as tarefas que tem que ser feitas e vão entrar nas próximas sprints

## Critério de Aceite
- Lista de critérios que precisam ser alcançados para que a User Story atenda os requisitos do usuário e seja aceita pelo PO
- Objetivos: definir limites para as User Stories e ajudar o PO a detalhar em alto nível o que é necessário para entregar valor ao cliente

## Estimativa
### Planning Poker
- Cada membro do time recebe um deck contendo todos os números da sequência de Fibonacci
Quando todos estão prontos, as estórias e tarefas são criadas
- O time dev vota jogando uma das cartas mostrando o tamanho da tarefa
  - Complexidade
  - Trabalho manual
  - Tempo

## Planejamento
### Primeira Etapa
- PO apresenta itens do backlog e apresenta para o time
- Leitura de Estórias e tira dúvidas
- Quebra de tarefas e estimativas

### Segunda Etapa
- PO não participa
- Time pega cada estória e define quais atividades deverão ser desenvolvidas
- Pode quebrar a quebra das Estórias

### Sprint Backlog
- PO valida itens prioritários
