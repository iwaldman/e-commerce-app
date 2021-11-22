const { ApolloServer, gql } = require('apollo-server')

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
    products: [Product!]!
  }

  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
    products: () => [
      {
        name: 'Bike',
        description: 'Mountain Bike',
        quantity: 20,
        price: 999.99,
        onSale: false,
      },
    ],
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
