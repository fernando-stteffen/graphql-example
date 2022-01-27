const productsModel = require('./products.model')

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProduct()
    },
    productsByPrice: (_, args) => {
      return productsModel.getProductByPrice(args.min, args.max)
    },
    product: (_, args) => {
      return productsModel.getProductById(args.id)
    }
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productsModel.addNewProduct(args.id, args.description, args.price)
    },
    addNewProductReview: (_, args) => {
      return productsModel.addNewProductReview(args.id, args.rating, args.comment)
    }
  }
}