# HTTP - HyperText Transfer Protocol
Protocolo de Transferência de HiperTexto
  - Protocolo: conjunto de regras
  - HiperTextos: textos com poderes
Permite troca de informações e dados na internet
  - HTML, CSS, Scripts, Imagens, Vídeos
  - Uma chamada para cada recurso

Browser faz um pedido (request) e o servidor responde(response)
  - Uma troca de mensagens

## Pedido (Request)
Method: ação que quer executar
  - Define o tipo do pedido
  - Qual ação quer fazer no servidor

## Resposta (response)
Status Code: resposta do servidor sobre o estado do pedido/resposta
- https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

## Request/Response
### Header
Campos informativos para o pedido ou resposta
  - Propriedade: valor
  - Content-Type: application/json
Tipos de Header: 
  - General (servem tanto para response quanto requests)
  - Request
  - Response
### Body
Conteúdo
HTML, conteúdo, JSON
### Recurso
Local para onde o pedido vai
URL para acessar o recurso


## Conceitos
### Cliente
- User Agent: browser, cURL
- Entidade que dá início a comunicação
### Pedidos
- São feitos através de ações do cliente
- GET, POST, PUT, DELETE
### Servidor
- Uma máquina preparada para ouvir e processar
- Vários servidores em um computador, ou até mesmo vários computadores para um servidor
### Resposta
- Headers
- Status Code
### Proxies
- “Representantes” que ficam entre o cliente e o servidor
- Ajudam a fazer o transporte dos dados
### Funções
- Cache
- Filtro (antivírus, controle parental)
- Load balancing (distribuição da carga)
- Autenticação e autorização
### Stateless
- Não guarda estado
- Não existe relação entre as conexões
- Uma coisa não depende da outra
- Sessões: guardar informações para serem enviadas na próxima conexão
- Cookies, storages
### Extensível
- Através do cabeçalho, pode-se fazer diversas trocas de informações entre o cliente-servidor
## URI - Uniform Resource Identifier
- Identificador uniforme que identifica um recurso
- Indica pelo nome e/ou localização
### Resource (Recurso)
- Alvo do pedido HTTP
- Pode ser qualquer coisa identificável/entidade
- Se puder identificar, nomear, endereçar ou manipular, é um recurso
### Locator
- URL: Uniform Resource Locator
- Componentes
  - Obrigatórios
    - Protocolo e domínio
  - Opcionais
    - Subdomínio (o que vem antes do domínio. Ex: ‘www’)
    - Path (caminho)
    - Parâmetros
    - Porta (após o domínio)
    - Âncora
    - Name - URN
      - Uniform Resource Name

## HTTP Messages
Mensagens tanto do request quando do response
- O conteúdo/pedido
- HTTP/1.1 ⇒ Legível e em texto
- HTTP/2 ⇒ Estrutura binária, melhor para otimizações, mas embaixo dos panos é a mesma coisa que a versão 1.1
### Request - Pedido
Method (Método)
Protocol Version (Versão do protocolo)
URI
### Response - Resposta
Protocol Version
Status Code
Header
Status Message (corpo da mensagem)

## HTTP Methods
Métodos é uma ação/funcionalidade que o cliente deseja operar
### Características
- Seguro
  - Não altera o estado do servidor
  - Somente leitura
  - Cliente não solicita alterações
  - Não há carga extra para o servidor
- Idempotente
  - Ao executar o método, a resposta deverá ser sempre a mesma
  - Status code poderá ser diferente
  - O servidor tem a responsabilidade de retornar dados da mesma maneira

### Method Options
- Informações sobre a disponibilidade da requisição
```bash
curl -X OPTIONS http://localhost:3000/posts -i
```
- Seguro e idempotente
  - Não envia e nem recebe
- Não usa em formulários
- Não é cacheable

### Method GET
- Pegar um recurso
- Somente recebe dados
- Seguro e idempotente
- Response recebe um body como resposta
- É cacheable
	- Guarda em memória para tê-lo de maneira mais rápida
- Pode ser usado em formulários

### Method HEAD
- Semelhante ao GET, porém recebe apenas o cabeçalho
```bash
curl -I http://localhost:3000/posts 
```
- Seguro e idempotente
- Não há body
- Não há uso em formulários
- Não é cacheable

### Method POST
- Publicar/cadastrar um recurso
```bash
curl -d '{ "id": 2, "title": "json-server-2", ”author": "leandro"}' -H "Content-type: application/json" -X POST http://localhost:3000/posts 
```
- Não é seguro (altera coisas no servidor) e não é idempotente (retornos diferentes)
- Body tanto na request quanto na response
- Uso em formulários
- Poderá ser cacheable
 
### Method PUT
- Criar um novo ou atualizar um recurso
- A diferença para o POST, é que ele é idempotente
  - Não é seguro (faz alterações no servidor)
- Tem body no pedido, mas não na resposta
- Não é usado em formulários
- Não é cacheable
- Mais usado para atualizar
- Status Code Criação: 201
- Status Code Atualização: 204 ou 200

### Method Patch
- Modificação parcial de um recurso
```bash
curl -d '{ "title": "my-title"}' -H "Content-type: application/json" -X PATCH http://localhost:3000/posts/1
```
- PUT altera o recurso inteiro
- Não é seguro e nem idempotente
- Tem body na request e response
- Não é usado em formulários
- É cacheable

### Method DELETE
- Remover um recurso
- Status Code
  - 202: Accepted
  - 204: No content
  - 200: OK
- Não é seguro, mas é idempotente
- Pode ser que tenha body no request ou na response
- Não é usado em formulários
- Não é cacheable
