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
    .isISO8601()
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

  body("dimensiones")
    .notEmpty()
    .withMessage("El p`roducto debe teber dimendiones"),

  body("colores")
    .optional()
    .isArray()
    .withMessage("El campo colores debe ser una lista de valores"),

  body("etiquetas")
    .optional()
    .isArray()
    .withMessage("El campo colores debe ser una lista de valores"),
  body("imagenes")
    .optional()
    .isArray()
    .withMessage("El campo colores debe ser una lista de valores"),

  validateResult,
];

const updateProductValidation = [
  param("id")
    .notEmpty()
    .withMessage("El ID es requerido")
    .isMongoId()
    .withMessage("Debe ser un ID de MongoDB válido"),
  body("nombre").optional().isString().withMessage("El debe ser texto"),

  body("descripcion")
    .optional()
    .isString()
    .withMessage("La descripcion debe ser texto"),

  body("precio")
    .optional()
    .isNumeric()
    .withMessage("El precio debe ser un numero")
    .custom((value) => {
      if (value < 0) throw new Error("El precio no puede ser negativo");
      return true;
    }),

  body("stock")
    .optional()
    .isNumeric()
    .withMessage("El stock debe ser un numero")
    .custom((value) => {
      if (value < 0) throw new Error("El stock no puede ser negativo");
      return true;
    }),

  body("categoria")
    .optional()
    .isString()
    .withMessage("La categoria debe ser texto"),

  body("marca").optional().isString().withMessage("La marca debe ser texto"),

  body("codigoProducto")
    .optional()
    .isString()
    .withMessage("La codigoProducto debe ser texto"),

  body("fechaFabricacion")
    .optional()
    .isDate()
    .withMessage("La fecha de fabricacion debe una fecha"),

  body("garantiaMeses")
    .optional()
    .isNumeric()
    .withMessage("El campo garantiaMeses debe ser un numero")
    .custom((value) => {
      if (value < 0)
        throw new Error("El campo garantiaMeses no puede ser negativo");
      return true;
    }),

  body("peso")
    .optional()
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
  ,
  validateResult,
];

const getProductsValidation = [
  param("id")
    .optional()
    .isMongoId()
    .withMessage("debe de ser un id de mongo valido"),
  validateResult,
];

module.exports = {
  createProductValidations,
  updateProductValidation,
  getProductsValidation,
};
