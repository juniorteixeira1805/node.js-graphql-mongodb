const { GraphQLServer } = require('graphql-yoga');
const path = require('path')
const mongoose = require('mongoose')

const resolvers = require('./Controllers/resolves') //Recebendo o arquivo resolves

mongoose.connect('mongodb://localhost:27017/graphqlnode', { // configuração do BD
    useNewUrlParser: true
})

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'Querys/schema.graphql'), //Setando o arquivo das querys
    resolvers //arquivo de logica das querys
});

server.start(()=>{
    console.log("Servidor rodando em http://localhost:4000")
});