exports.Product = {
  category: (parent, args, { db }) =>
    db.categories.find((category) => category.id === parent.categoryId),
  reviews: ({ id }, args, { db }) => db.reviews.filter((review) => review.product.Id === id),
}
