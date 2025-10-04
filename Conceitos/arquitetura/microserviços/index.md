# Microsserviços
- Cada parte do sistema é independente, podendo até usar tecnologias diferentes
- Os serviços precisam conseguir se comunicar, utilizando por exemplo o padrão de APIs REST
- O ideal é começar escrever o sistema de forma monolítica e ir criando so microsserviços de acordo a complexidade for aumentando

## Tipos
### Data service (Serviços de domínio)
- Tipo de serviço que permite acesso aos dados
- Utilizar as práticas de Domain-driven Design pode facilitar identificar o que é um domínio no sistema que poderia ser transformado em um serviço
- REST e RPC podem andar juntos

### Business service
- Conjunto de data service, pois alguma funcionalidade pode precisar de mais de uma parte do domínio
- Contém as regras de negócio
- É quem chama o data service

### Translation service
- Acesso a serviços externos, API de terceitos

### Edge service
- Permitir expor um determinado serviço de forma condicional

## Service Mesh
- Conjunto de ferramentas que fica entre cada serviço que vai se comunicar
- A cada requisição, vai ser utilizado um proxy que pode adicionar algumas funcionalidades
    - Passar dados para um serviço de observabilidade
    - Tracking de requests
- Exemplo de ferramenta: istio

## Padrões
### Strangler pattern
- Quebrar um monolito em vários pequenos serviços

### Sidecar pattern
- Processo comum entre os serviços
- Módulo compartilhável entre os serviços
- Por exemplo: um pacote no npm, no maven

## Integração 
### API Gateway
- Centraliza o acesso a diversos serviços e redireciona para o serviço solicitado
- Fornece um proxy, com os apenas os endpoints necessários
- Uma desvantagem é se tornar um ponto central de falha
- Pode adicionar informações extras nas requisições

### Process aggregator pattern
- Serviços de negócio agregam serviços de domínio que, por sua vez, são agreagados pelos process aggregators
- Contém alguma lógica de processamento
    - Junta as respostas dos serviços e faz o processamento

### Edge pattern
- Vários pontos de entrada condicionado ao cliente
- Foco específico para um cliente
    - Cliente HTTP, ou cliente comercial
- Modifica os dados que são transferidos para otimização do processo
    - Ex: não enviar todos os dados que envia para um cliente web para um cliente mobile também

## Banco de dados
### Single service database
- Cada serviço tem seu banco de dados

### Shared service database
- Caso algum dado tenha que ser centralizado
- Há um desperdício de recursos pois o banco de dados precisaria escalar de acordo com o maior serviço que o consome
- Mesmo sendo o mesmo banco, os serviços vão ser acessar o banco de forma independente

## Logs
- Devem ter um formato padrão entre todos os serviços
- Devem ser agregador em algum ponto para que sejam visualizados todos juntos
- É muito importante para conseguir rastrar chamadas a partir do trace ID (similar a call stack)
- APMs: ferramentas que agregam os logs e facilitam a visualização das call stack

## Métricas
- Visão de alto nível dos microsserviços
    - Ex: ver o serviço que está recebendo mais requisições e melhorar o servidor desse serviço especícifo
- Importante ter dashboards com uma visão geral do sistemas mas também é importante ter um por serviço, para uma visão mais específica