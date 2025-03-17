//importar express
const express = require('express');
const app = express();

//Parsear de forma automatica a JSON
app.use(express.json());

//endpoint

//GET
app.get('/api',(request,response)=>{
    const {nombre,edad}=request.query
    response.status(200).json({success:'ok', message:`hola ${nombre} tienees ${edad} años`})
})

app.get('/api/:nombre',(request,response)=>{
    const {nombre}=request.query
    response.status(200).json({success:'ok', message:`hola ${nombre} `})
})

//POST
app.post('/registro', (request,response)=>{
    const {nombre,edad,mail}=request.body;
    console.log(nombre,edad,mail);
    response.end();
})

//levantar el servidor

app.listen(3000,()=>{
    console.log('servidor levnatado con exito en localhost puerto 3000');
})