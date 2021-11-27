exports.Product = {
  category: (parent, args, { db }) =>
    db.categories.find((category) => category.id === parent.categoryId),
}
