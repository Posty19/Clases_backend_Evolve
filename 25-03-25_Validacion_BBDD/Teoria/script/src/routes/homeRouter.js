const express = require('express');
const router = express.Router()
const homeController = require('../controllers/homeController');

router.get('/',homeController.getHome());

router.get('/about',(request,response)=>{
    response.status(200).json({
        success:'Ok',
        message:'Mensage de pruebas para el get /about'
    });
});

router.post('/contact',(request,response)=>{
    const {nombre,edad,mail} = request.body;
    response.status(200).json({
        success:'ok',
        mail:mail,
        age:edad,
        name:nombre
    });
});

module.exports = router;