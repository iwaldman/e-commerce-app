exports.Category = {
  products: (parent, { filter }, { db }) => {
    let categoryProducts = db.products.filter((product) => product.categoryId === parent.id)

    let filteredCategoryProducts = categoryProducts

    if (filter?.onSale) {
      filteredCategoryProducts = categoryProducts.filter((product) => product.onSale)
    }

    return filteredCategoryProducts
  },
}
