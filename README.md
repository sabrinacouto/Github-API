# ✨ Consumindo API do Github  - Teste Técnico✨

Este projeto é uma aplicação web construída com React e Material UI que permite aos usuários visualizar repositórios do GitHub. A aplicação consome a API pública do GitHub para buscar e exibir repositórios, mostrando informações como nome, descrição e número de estrelas. Os usuários podem clicar em um cartão para abrir o repositório no GitHub.

<p align='center'>
   <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
   <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white">
</p>

## Pré-requisitos

Antes de rodar o projeto, você precisa ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/get-npm) 

##  💬 Rodando localmente

1. **Clone o repositório**

   ```bash
   git clone https://github.com/sabrinacouto/Github-API/

2. **Navegue para o diretório do projeto**
   ```bash
   cd github-api
   
3. **Instale as dependências**
   ```bash
   npm install

4. **Rodando o projeto**
   ```bash
   npm start

##  💬 Vercel

Ou você pode acessar pelo link:

https://github-api-three-delta.vercel.app/

## Explicações Básicas da Estrutura do Código

Este projeto é uma aplicação React que consome a API do GitHub para buscar e exibir informações sobre repositórios de usuários. A seguir, descrevemos a estrutura básica do código e a função de cada componente principal.

### 1. Componentes Principais

- **`Header`**: Este componente é responsável por renderizar o cabeçalho da aplicação, que inclui o título "GitHub API" com um estilo de gradiente e um botão de navegação "Home" que permite retornar à página inicial.

- **`SearchBar`**: Este componente permite ao usuário inserir um nome de usuário do GitHub e iniciar uma busca. 

- **`RepoCard`**: Este componente exibe as informações detalhadas de um repositório em um card, incluindo o nome do repositório, descrição, número de estrelas, linguagem principal, e número de forks. 


### 2. Fluxo de Navegação

A navegação entre as páginas é gerenciada pelo componente `AppRoutes`, que utiliza o `react-router-dom` para definir as rotas principais:
- `/` para a `HomePage`
- `/search` para a `SearchPage`

### 3. Funcionalidade de Busca

Quando o usuário insere um nome de usuário no `SearchBar` e clica no botão de pesquisa, a aplicação faz uma requisição à API do GitHub para buscar os repositórios associados a esse nome de usuário. Os resultados são exibidos na `SearchPage` em forma de `RepoCard` para cada repositório encontrado.



<p align='center'>
Desenvolvido com 💜 por Sabrina Couto
</p>



