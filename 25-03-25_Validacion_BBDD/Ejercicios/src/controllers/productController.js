const {
  insertProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../services/productService");

const {
  createProductValidations,
  updateProductValidation,
  getProductsValidation,
} = require("../validations/productValidation");
