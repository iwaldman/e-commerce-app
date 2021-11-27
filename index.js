const { ApolloServer, gql } = require('apollo-server')

const { typeDefs } = require('./schema')
const { Query, Product, Category } = require('./resolvers')
const { db } = require('./db')

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Product, Category },
  context: {
    db,
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
