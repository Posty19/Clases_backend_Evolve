const express = require('express');
const router = express.Router()

router.get('/',(request,response,next)=>{
    const {idioma,temas} = request.query;
    if(idioma&&temas){
        response.status(200).json({success:'ok',language:idioma,theme:temas})
    }else{
        const error = new Error('faltan datos');
        next(error);
    }
});

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