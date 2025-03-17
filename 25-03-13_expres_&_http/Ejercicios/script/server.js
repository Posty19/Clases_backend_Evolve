const express = require('express');
const app = express();
const port = 3000
const users = [
    { nombre: "Laura", edad: 24, mail: "mail2@mail2.es" },
    { nombre: "daniel", edad: 28, mail: "mail@mail.es" }
];

app.use(express.json());

//GET name edad
app.get('/api',(request,response)=>{
    const {nombre,edad} = request.query;
    response.status(200).json({success:'ok',message:`Hola ${nombre} teines ${edad} años`});
});
// GET :name
app.get('/api:nombre',(request,response)=>{
    const {nombre} = request.params;
    response.status(200).json({success:'ok',message:`Hola ${nombre}, buenos dias`});
});

//POST registro
app.post('/registro',(request,response)=>{
    const {nombre,edad,mail} = request.body;
    console.log(`registro completado con exito nombre: ${nombre}, edad ${edad} & email ${mail}`);
    response.status(200).json({success:'ok',message:`registro completado con exito nombre: ${nombre}, edad ${edad} & email ${mail}`});
    response.end()
});

//POST /actualizar
app.post('/actualizar',(request,response)=>{
    const {nombre,edad,mail} = request.body;
    console.log(`datos cambiados exito a: nombre: ${nombre}, edad ${edad} & email ${mail}`);
    response.status(200).json({success:'ok',message:`datos cambiados exito a: nombre: ${nombre}, edad ${edad} & email ${mail}`});
    response.end()
});

//POST /eliminar
app.post('/eliminar',(request,response)=>{
    const {nombre} = request.body;
    console.log(`Los datos del usuario: ${nombre} han sido eliminados con exito`);
    response.status(200).json({success:'ok',message:`Los datos del usuario: ${nombre} han sido eliminados con exito`});
    response.end()
});

//GET /usuarios
app.get('/usuarios',(request,response)=>{
    

    response.status(200).json({success:'ok',users:users});
});

app.listen(port,()=>{
    console.log(`servidor levnatado con exito en http://localhost:${port}`);
})