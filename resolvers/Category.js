exports.Category = {
  products: (parent, args, { db }) =>
    db.products.filter((product) => product.categoryId === parent.id),
}
