const { products, categories } = require('../db')

exports.Query = {
  hello: () => 'world',
  products: () => products,
  product: (parent, { id }, context) => products.find((product) => product.id === id),
  categories: () => categories,
  category: (parent, { id }, context) => categories.find((category) => category.id === id),
}
