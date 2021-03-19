# node.js-graphql-mongodb

**Está aplicação é uma simples forma de cadastrar e listar usuário utilizando node e graphQL.L**

<p>Para executar esté programa, você precisará do node instalado em sua maquina e seguir os seguintes passos:</p>

<ul>
  <li>Clona o projeto;</li>
  <li>Na raiz da pasta executar o comando <yarn install> para instalar as dependencias;</li>
  <li>Na raiz do projeto executar o comando <node src/server.js>;</li>
</ul>

<span><strong>OBS:</strong> Ao executar o projeto, ele estará ouvindo a porta http://localhost:4000</span>

<span><strong>OBS:</strong> Você terá a passibilidade de testar a plaicação com um array ou com o banco de dados. Para utilizar o BD, basta ir no arquivo resolves na pasta Controllers e descomentar o trecho do código do Banco de Dados e comentar o trecho de código que utiliza o array | por padrão está utilizando o array.</span>

###Projeto
src__ //Pasta com o código da aplicação
    |
    |
    Controllers__ // Pasta com a lógica negocial
    |           |
    |           resolvers.js
    |
    Models // Pasta que contém as schmas para criação das collections do mongoDB
    |     |
    |     User.js
    |
    Querys // Pasta que contém os arquivo com Querys do graphQL
    |    |
    |    schema.graphql
    |
    server.js // Arquivo principal. Responsavel por escutar a porta 4000
