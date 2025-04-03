const {
  insertProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../services/productService");
const { getUsers } = require("../services/userServices");

const {
  createProductValidations,
  updateProductValidation,
  getProductsValidation,
} = require("../validations/productValidation");

const productController = {
  getProducts: [
    ...getProductsValidation,
    async (request, response) => {
      try {
        const data = await getProducts();
        response.status(200).json(data);
      } catch (e) {
        console.log("Error al recoger usuario de la BBDD", e);
        response
          .status(500)
          .json({ error: "Error al recoger producto de la BBDD" });
      }
    },
  ],
  createProduct: [
    ...createProductValidations,
    async (request, response) => {
      try {
        const newProduct = await insertProduct(request.body);
        response.status(201).json(newProduct);
      } catch (e) {
        console.log("Error al crear producto", e);
        response.status(500).json({ error: e.message });
      }
    }
  ],
  updateProduct : [
    async (request,response)=>{
        try {
            const { id } = request.params;
            const productData = request.body;
            const updatedproduct = await updateProduct(id, productData);
            response.status(200).json(updatedproduct);
          } catch (e) {
            console.log("Error al actualizar producto", e);
            response.status(500).json({ error: "Error al actualizar producto" });
          }
    }
  ]
};

module.exports = productController;
