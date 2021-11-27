// The GraphQL schema

const { gql } = require('apollo-server')

exports.typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
    product(id: ID!): Product
    products(filter: ProductsFilterInput): [Product!]!
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
    reviews: [Review!]!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
`
