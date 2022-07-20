# HTTP - HyperText Transfer Protocol
Protocolo de Transferência de HiperTexto
  - Protocolo: conjunto de regras
  - HiperTextos: textos com poderes
Permite troca de informações e dados na internet
  - HTML, CSS, Scripts, Imagens, Vídeos
  - Uma chamada para cada recurso

Browser faz um pedido (request) e o servidor responde(response)
  - Uma troca de mensagens

## Request (Requisição)
- URL/endpoint
  - Identificação de recursos

  <img src="./img/http1.png" />

- Query Params
  - Parâmetros adicionais passados na URL

- Método
  - Qual ação queremos tomar em cima do recurso identificado pela URL
  - GET: consulta de dados
  - POST: criação de registros
  - PUT: alteração completa de registros
  - PATCH: alteração parcial de registros
  - DELETE: deleção de registros
  
- Headers
  - Informações adicionais
  - "Content-Type: application/json
  - Case insensitive
  - Custom Header: criar sempre começando com um X

- Body
  - Corpo da mensagem
  - Apenas em POST ou PUT
    - JSON
    - Multipart/form-data: para enviar imagens e arquivos

## Resposta (response)
Status Code: resposta do servidor sobre o estado do pedido/resposta
- https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

- Headers
  - Informações adicionais

- Content Type
  - Tipo de conteúdo da resposta

- Status Code
  - Indica o que aconteceu com a request

- Body
  - Dados requisitados

## HTTP Messages
Mensagens tanto do request quando do response
- O conteúdo/pedido
- HTTP/1.1 ⇒ Legível e em texto
- HTTP/2 ⇒ Estrutura binária, melhor para otimizações, mas embaixo dos panos é a mesma coisa que a versão 1.1
### Request - Pedido
- Method (Método)
- Protocol Version (Versão do protocolo)
- URI
### Response - Resposta
- Protocol Version
- Status Code
- Header
- Status Message (corpo da mensagem)

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

## Same Origin Policy (SOP) | Política de mesma Origem
- Mecanismo de segurança que tem dentro dos navegadores.
- Origem: protocolo://domínio:porta
- Requisições que são feitas através do JavaScript só podem ser realizadas se a origem de onde a request está saindo for a mesma origem de onde a request está chegando.
- Toda vez que essa regra for ferida, o navegador irá impedir a requisição.
  - Para flexibilizar essas regras, existe o CORS.

## CORS (Cross-Origin Resource Sharing) | Compartilhamento de Recursos entre Origens Diferentes
- Mecanismo para flexibilizar a SOP.
- Toda vez que uma requisição fere a SOP, ela passa a ser uma requisição do tipo CORS.
  - Uma requisição com origens diferentes.
- O back-end deverá retornar no header uma propriedade <code>Access-Control-Allow-Origin</code> com a origem aceita.
  - Caso seja uma API pública, é necessário utilizar um Wildcard (usando o "*"), para liberar o acesso a todos.

### Simple requests
Cumpre cinco requisitos: 
  - Ter um dentre esses três métodos: GET, HEAD, POST;
  - Não se pode definir nenhum header na requisição com exceção dos seguintes:
    - Accept;
    - Accept-Language;
    - Content-Language;
    - Content-Type;
      - application/x-www-form-urlencoded
      - multipart/form-data
      - text/plain
    - XMLHttpRequest
    - Não utilizar ReadableStream

### Preflighted requests
- A partir do momento em que alguma regra da simple request é ferida, ela se torna Preflighted.
  - O navegador dispara uma requisição antes da requisição solicitada
    - Essa requisição sempre será do tipo OPTIONS para o mesmo destino
      - Serve para verificar na api os métodos e headers permitidos