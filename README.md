# Projeto 01 - Agenda Eletrônica

## 🔗 Descrição do projeto
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

## 🔗 Atualizações recentes

#### 🛠️ Ajustes Gerais
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

## 🔗 Iniciando o projeto

### Git
```bash
git clone https://github.com/jekkaleeme/programacao-web-backend.git

cd programacao-web-backend
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
  "end_date": null,
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