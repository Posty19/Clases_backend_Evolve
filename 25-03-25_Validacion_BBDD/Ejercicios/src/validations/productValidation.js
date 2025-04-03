const { body, param, validationResult } = require("express-validator");

// Función de validación de resultados
const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const createProductValidations = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es requerido")
    .isString()
    .withMessage("El debe ser texto"),

  body("descripcion")
    .notEmpty()
    .withMessage("El producto debe tener descripcion")
    .isString()
    .withMessage("La descripcion debe ser texto"),

  body("precio")
    .notEmpty()
    .withMessage("El producto debe tener precio")
    .isNumeric()
    .withMessage("El precio debe ser un numero")
    .custom((value) => {
      if (value < 0) throw new Error("El precio no puede ser negativo");
      return true;
    }),

  body("stock")
    .notEmpty()
    .withMessage("El producto debe tener stock")
    .isNumeric()
    .withMessage("El stock debe ser un numero")
    .custom((value) => {
      if (value < 0) throw new Error("El stock no puede ser negativo");
      return true;
    }),

  body("categoria")
    .notEmpty()
    .withMessage("El producto debe tener categoria")
    .isString()
    .withMessage("La categoria debe ser texto"),

  body("marca")
    .notEmpty()
    .withMessage("El producto debe tener marca")
    .isString()
    .withMessage("La marca debe ser texto"),

  body("codigoProducto")
    .notEmpty()
    .withMessage("El producto debe tener codigoProducto")
    .isString()
    .withMessage("La codigoProducto debe ser texto"),

  body("fechaFabricacion")
    .notEmpty()
    .withMessage("El producto debe tener fecha de fabricacion")
    .isDate()
    .withMessage("La fecha de fabricacion debe una fecha"),

  body("garantiaMeses")
    .notEmpty()
    .withMessage("El producto debe tener garantiaen meses")
    .isNumeric()
    .withMessage("El campo garantiaMeses debe ser un numero")
    .custom((value) => {
      if (value < 0)
        throw new Error("El campo garantiaMeses no puede ser negativo");
      return true;
    }),

  body("peso")
    .notEmpty()
    .withMessage("El producto debe tener peso")
    .isNumeric()
    .withMessage("El peso debe ser un numero")
    .custom((value) => {
      if (value < 0) throw new Error("El peso no puede ser negativo");
      return true;
    }),

  /*
        pensar como validar las dimensiones
    */

  body("colores")
    .optional()
    .isArray()
    .withMessage("El campo colores debe ser una lista de valores")
    .custom((value) => {
      if (value.length < 0) {
        value.forEach((el) => {
          el.isString().withMessage("Los colores han de ser texto");
        });
      }
    }),

  /*
        probar si fumciona y repetir para etiquetas e imagenes 
    */

  validateResult,
];

const updateProductValidation = [

    validateResult
];

const getProductsValidation = [

    validateResult
];

module.exports = {
  createProductValidations,
  updateProductValidation,
  getProductsValidation,
};
