# node.js-graphql-mongodb

<p align="center">
 <a href="#objetivo">Objetivo</a> •
 <a href="#tecnologias">utilização</a> • 
 <a href="#autor">Autor</a>
</p>

## Description
Está aplicação é uma simples forma de cadastrar e listar usuário utilizando node.js e graphQL

## Getting Started
Para utilizar o projeto, basta clonar o repositório em um diretório de sua preferência com o seguinte comando:
```
git clone https://github.com/juniorteixeira1805/node.js-graphql-mongodb
```
Para instalar as dependenciasa, raiz da pasta, executar o comando:
```
yarn install
```
Na raiz do projeto executar o comando
```
node src/server.js
```
<span><strong>OBS:</strong> Ao executar o projeto, ele estará ouvindo a porta http://localhost:4000</span>

## Technologies
- node.js
- mongoDB
- graphQL

## Build
Na raiz do projeto executar o comando
```
yarn build
```
## Features
- É possível cadastrar usuários de modo:
  - Em um array para um teste rápido da aplicação.
  - No Banco de Dados.
- Para utilizar o BD, basta ir no arquivo resolves.js na pasta Controllers e descomentar o trecho do código do Banco de Dados e comentar o trecho de código que utiliza o array | por padrão, a aplicação está utilizando o array.
- É possível listar um unico usuário chamando a Query user() passando um ID;
- É possível listar uyodos os usuário chamando a Query users() sem passar parametros;
- É possível cadastrar um novo usuário chamando a Query createUser() passando por parametro um nome e email;

## Contributions
Contribuições para o projeto são sempre bem-vindas.

## License
Não se aplica.

## Author
Feito por Junior Teixeira, entre em contato!

<img src="https://avatars.githubusercontent.com/u/49037876?s=96&v=4" alt="junior teixeira"></img>

[![Linkedin Badge](https://img.shields.io/badge/-Gilvan%20Carlos-3355cc?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gilvan-carlos/)](https://www.linkedin.com/in/gilvan-carlos/) 
[![Gmail Badge](https://img.shields.io/badge/-juniorteixeira1805@gmail.com-3355cc?style=flat-square&logo=Gmail&logoColor=white&link=mailto:juniorteixeira1805@gmail.com)](mailto:juniorteixeira1805@gmail.com)
