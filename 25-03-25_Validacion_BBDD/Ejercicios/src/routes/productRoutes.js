const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')


router.get('/', productController.getProducts);


// POST /products para crear nuevo producto
router.post('/', productController.createProduct);


// PUT /products/:id para actualizar producto
router.put('/:id', productController.updateProduct);


module.exports = router; 