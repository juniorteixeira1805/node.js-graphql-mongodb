/*const User = require('../Models/User')

module.exports = {
    Query: {
        users: () => User.find(), // Listando todos os usuários do BD
        user: (_, {id}) => User.findById(id), // procurando um usuário por um ID do BD
        
    },

    Mutation: {
        createUser: (_, {name, email}) => User.create({name: name, email: email}), // Criando um usuário no BD
    }
}
*/
const users = [
    {id: 1, name: 'Mateus Loiola', email: 'mateus@gmail.com'},
    {id: 2, name: 'Adelson Nunes', email: 'adelson@gmail.com'},
    {id: 3, name: 'Marcos Adriano', email: 'maria@gmail.com'},
    {id: 4, name: 'Ruan Kelvin', email: 'ruan@gmail.com'},
    {id: 5, name: 'Diego Oliveira', email: 'diego@gmail.com'},
    {id: 6, name: 'Alice Costa', email: 'alice@gmail.com'},
    {id: 7, name: 'Song Jong', email: 'song@gmail.com'}
] // array com usuários para teste

module.exports = {
    Query: {
        users: () => users, // Listando todos os usuários do do array
        user: (_,{id}) => { // procurando um usuário por um ID do array
            for(let i = 0; i < users.length; i++){
                if(parseInt(id) === users[i].id){
                    return users[i-1]
                }
            }
            return null; // caso não exista, retorna null
        }
    },

    Mutation: {
        createUser: (_,{name, email}) => {
            try {
                users.push({id: users.length, name: name, email, email})
                return users[users.length-1]
            } catch (error) {
                return null
            }
        } // Criando um usuário no BD
    }
}
