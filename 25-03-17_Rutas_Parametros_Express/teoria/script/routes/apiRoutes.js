const express = require('express');
const router = express.Router();


router.get('/',(request,response)=>{
    const {nombre,edad} = request.query;
    response.status(200).json({success:'ok',message:`Hola ${nombre} teines ${edad} años`});
});
router.get('/:nombre',(request,response)=>{
    const {nombre} = request.params;
    response.status(200).json({success:'ok',message:`Hola ${nombre}, buenos dias`});
});

module.exports = router;
