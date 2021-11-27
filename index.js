const { ApolloServer, gql } = require('apollo-server')

const { typeDefs } = require('./schema')
const { Query, Product, Category } = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Product, Category },
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
