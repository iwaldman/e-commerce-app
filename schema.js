// The GraphQL schema

const { gql } = require('apollo-server')

exports.typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]
  }
`
