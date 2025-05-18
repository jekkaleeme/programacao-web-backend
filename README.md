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
  "username": "usuário 01",
  "password": "123",
  "email": "user@gmail.com"
}
```

### Criação de um evento

- **Método:** `POST`
- **URL:** `http://localhost:3000/agenda`
- **Corpo (JSON):**
```json
{
  "title": "reunião com equipe",
  "content": null,
  "end_date": "2025-05-20T23:59:00.000Z"
}
```

### Criação de um lembrete

- **Método:** `POST`
- **URL:** `http://localhost:3000/notification`
- **Corpo (JSON):**
```json
{
  "title": null,
  "date": "2025-05-19T23:59:00.000Z",
  "type": "email",
  "task": null,
}
```