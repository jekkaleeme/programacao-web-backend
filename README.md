# 📅 Agenda Eletrônica 2.0 – Gerenciamento de Eventos

## 💡 Descrição do projeto
Este projeto tem como objetivo o desenvolvimento de uma **agenda eletrônica**, inspirada em plataformas como o Google Calendar. A aplicação permite que os usuários possam **criar, armazenar, visualizar e buscar eventos** em um calendário interativo.

A agenda foi desenvolvida com foco na **programação web back-end**, utilizando boas práticas de organização de código, separação entre camadas e acesso a banco de dados. O sistema visa oferecer uma experiência prática e eficiente para o gerenciamento de compromissos, eventos pessoais ou profissionais.

Este projeto foi desenvolvido como parte das atividades da disciplina **Programação Web Back-End**, com o objetivo de aplicar os conceitos abordados em aula de forma prática.

### Funcionalidades do Sistema
- Cadastro de eventos: permite a criação de eventos com os seguintes atributos: título, descrição, data e hora de término. Os dados são validados no momento da inserção para garantir integridade e consistência.

- Listagem de eventos: os eventos cadastrados podem ser visualizados em uma listagem ordenada cronologicamente pela data e hora de término, facilitando a identificação de compromissos mais próximos.

- Busca eficiente de eventos: o sistema oferece mecanismos de busca por data específica ou por palavras-chave no título, permitindo ao usuário localizar rapidamente os eventos desejados.

- Armazenamento: todos os dados são salvos em um banco de dados.

#### Desenvolvedora
Jéssica Leme Freitas

#### Disciplina
EC48B-C71 — Programação Web Back-End

#### Professores
- Prof.ª Monique Emídio de Oliveira

- Prof. Willian Massami Watanabe

## ⚙️ Transformações Técnicas entre as Etapas do Projeto

Os dois projetos compartilham a mesma temática — neste caso, uma **agenda eletrônica inspirada no Google Calendar** — mas diferem quanto à abordagem técnica utilizada em sua implementação.

#### 🧩 Projeto 01 — Implementação com HTTP Nativo

O primeiro projeto foi desenvolvido utilizando **apenas os recursos nativos do Node.js**, sem o uso de frameworks externos como o Express.js. Nele, todas as rotas, tratamentos de requisições e respostas, bem como o controle de fluxo da aplicação, foram feitos manualmente. O foco principal foi a prática dos fundamentos da programação back-end, com ênfase em:

- Organização e separação das camadas de código (controllers, services, models);
- Criação e listagem de eventos;
- Validação dos dados de entrada;
- Armazenamento em banco de dados;
- Utilização do protocolo HTTP de forma bruta.

#### 🧩 Projeto 02 — Evolução com Express.js

O segundo projeto reutiliza a base de classes e funcionalidades do Projeto 01, mas com um avanço significativo: a **adoção do framework Express.js**. Isso trouxe maior produtividade, legibilidade e organização ao código. Além disso, foram incorporadas novas funcionalidades e boas práticas típicas de aplicações modernas, tais como:

- Implementação de rotas com Express e tratamento de requisições GET/POST;
- Utilização de sessões para autenticação e controle de acesso de usuários;
- Retorno de respostas estruturadas no formato JSON (API) ou renderização com templates;
- Validação de campos obrigatórios com mensagens de erro claras;
- Organização do sistema visando maior escalabilidade e manutenção.

Em resumo, o Projeto 02 representa uma evolução do Projeto 01, aplicando conceitos mais avançados e recursos do ecossistema Node.js para criar uma aplicação web mais robusta e alinhada ao mercado.

## 🛠️ Atualizações recentes

#### Ajustes Gerais
- ✅ Refatoração completa para utilização de **HTTP nativo**, eliminando a dependência do Express.
- ✅ Adequação dos controladores para retorno de mensagens de **erro de validação** no formato JSON, com informações claras e detalhadas.
- ✅ Reestruturação das rotas e fluxos para compatibilidade com **HTTP nativo**, sem utilização de middlewares ou bibliotecas externas para roteamento.
- ✅ Adição de **timestamps** automáticos (`createdAt` e `updatedAt`) nos modelos.

#### Usuário (User)
- ✅ Campo `username` definido como **único** (*nota: ainda sem tratamento específico de erro para duplicatas*).
- ✅ Campo `email` definido como **único** (*nota: ainda sem tratamento específico de erro para duplicatas*), com validação de formato **implementada e tratada**.

####  Eventos (Task)
- ✅ Inclusão do campo `start_date`.
- ✅ Modificação na lógica de `end_date`, agora é automaticamente configurado para **1 dia após** a `start_date`.
- ✅ Inclusão do novo campo `local` para especificação de **localização** do evento.

## 🚀 Iniciando o projeto

### Git

#### 🧩 Projeto 01
```bash
git clone https://github.com/jekkaleeme/programacao-web-backend.git

cd programacao-web-backend

cd projeto_01
```
#### 🧩 Projeto 02
```bash
git clone https://github.com/jekkaleeme/programacao-web-backend.git

cd programacao-web-backend

cd projeto_02
```

### Backend
```bash
cd backend

npm install

npm run dev
```
O servidor está funcionando na porta http://localhost:3000.

### Insomnia

Para testar os endpoints da agenda eletrônica e visualizar os dados armazenados no banco de dados, recomendamos o uso do **Insomnia**, uma ferramenta para enviar requisições HTTP.

#### Dica:
Para garantir que a sessão seja preservada entre requisições, ative o "Cookie Jar" do Insomnia:

- Clique no nome da requisição >`Cookies`

- Confirme que o cookie `connect.sid` foi salvo após o login.

####  Download do Insomnia

Se ainda não tem o Insomnia instalado, baixe em https://insomnia.rest/download

## 🔗 Endpoints da API

Abaixo estão os principais endpoints para testar a API:

### Criação de um usuário

- **Método:** `POST`
- **URL:** `http://localhost:3000/user`
- **Corpo (JSON):**
```json
{
  "username": "Caetano",
  "password": "123",
  "email": "caetano@gmail.com"
}
```

### Criação de um evento

- **Método:** `POST`
- **URL:** `http://localhost:3000/task`
- **Corpo (JSON):**
```json
{
  "title": "reunião com a equipe de marketing",
  "content": null,
  "local": "sala P202",
  "start_date": "2025-06-01T15:00:00.000Z", // caso seja null será adicionado a data atual
  "end_date": null
}
```

### Criação de um lembrete

- **Método:** `POST`
- **URL:** `http://localhost:3000/notification`
- **Corpo (JSON):**
```json
{
  "title": "reunião em 15min",
  "date": "2025-06-10T23:59:00.000Z",
  "task": null // podemos relacionar com um evento ao adicionar o id
}
```

## 🔗 Endpoints de Autenticação

### Login do usuário

- **Método:** `POST`
- **URL:** `http://localhost:3000/user/login`
- **Corpo (JSON):**
```json
{
  "email": "caetano@gmail.com",
  "password": "123"
}
```
### Logout do usuário

- **Método:** `POST`
- **URL:** `http://localhost:3000/user/logout`


## 🔐 Autenticação e Rotas Protegidas

Este projeto utiliza **autenticação baseada em sessão** com `express-session`. Após o login bem-sucedido, o ID do usuário é armazenado na sessão, permitindo acesso controlado às rotas protegidas.

### Fluxo de autenticação

1. **Cadastro do usuário (`POST /user`)**  
   O usuário cria uma conta enviando seus dados para essa rota. Essa etapa é pública e não exige estar logado.

2. **Login do usuário (`POST /user/login`)**  
   O usuário envia suas credenciais (como email e senha) para essa rota. Se as informações estiverem corretas, a aplicação cria uma sessão para ele, armazenando o ID do usuário no servidor. A partir desse momento, o usuário é considerado autenticado.

3. **Acesso às rotas protegidas**  
   Com a sessão ativa, o usuário pode acessar rotas que exigem autenticação, como criar, editar ou listar tarefas, notificações e informações do usuário.

4. **Logout (`POST /user/logout`)**  
   O usuário pode encerrar sua sessão enviando uma requisição para essa rota. Isso apaga a sessão no servidor, e ele perde o acesso às rotas protegidas.

5. **Obter dados do usuário logado (`GET /user/me`)**  
   Enquanto a sessão estiver ativa, o usuário pode consultar suas próprias informações usando essa rota protegida.


### Controle de acesso: Rotas protegidas

As rotas relacionadas a `task`, `notification`, `user` e à própria sessão (`POST /user/logout`, `GET /user/me`) só podem ser acessadas por usuários que estejam autenticados, ou seja, que possuam uma sessão ativa. Para garantir isso, o projeto utiliza um middleware `auth.js`, que verifica se o usuário está logado antes de permitir o acesso a essas rotas. Caso o usuário não esteja autenticado, o acesso é negado e um erro é retornado.

### Comportamento em caso de acesso não autorizado

Se um usuário tentar acessar qualquer rota protegida sem estar autenticado, a API retorna o seguinte erro:

```json
{
  "error": "Acesso não autorizado. Faça login para continuar."
}