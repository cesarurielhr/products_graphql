const productService = require('../services/productsService');

const resolvers = {
  Query: {
    products: async () => await productService.getProducts(),
  },
  Mutation: {
    createProduct: async (_, args) => await productService.createProduct(args),
    updateProduct: async (_, args) => await productService.updateProduct(args),
    deleteProduct: async (_, { _id }) => await productService.deleteProduct(_id),
  },
};

module.exports = resolvers;