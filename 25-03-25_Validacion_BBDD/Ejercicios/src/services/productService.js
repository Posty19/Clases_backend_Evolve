const Producto = require("../models/Product");

//crear Producto

async function insertProduct(prodData) {
  try {
    const product = new Producto(prodData);
    const res = await product.save();
    console.log("usuario insertado", res);
    return res;
  } catch (e) {
    console.log("error al insertar producto:", err);
    throw e;
  }
}

//obtener productos
async function getProducts() {
  try {
    const products = Producto.find();
    console.log("Productos", products);
    return products;
  } catch (e) {
    console.log("error al obtener productos:", err);
    throw e;
  }
}

//actualizar producto
async function updateProduct(id, productData) {
  try {
    // Añadir fecha de última actualización
    productData.ultimaActualizacion = new Date();
    const product = await Producto.findByIdAndUpdate(id, productData, {
      new: true,
      runValidators: true, // Ejecuta las validaciones del esquema
    });
    if (!product) {
      throw new Error("Producto no encontrado");
    }
    console.log("Producto actualizado:", producto);
    return product;
  } catch (err) {
    console.error("Error al actualizar producto:", err);
    throw err;
  }
}

async function deleteProduct(id) {
  try {
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      throw new Error("product no encontrado");
    }

    console.log("producto eliminado:", product);
    return product;
  } catch (err) {
    console.error("Error al eliminar producto:", err);
    throw err;
  }
}

module.exports = { insertProduct, getProducts, updateProduct, deleteProduct };
