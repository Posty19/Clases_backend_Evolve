//importar el modulo nativo http
const http = require('http')

//definir puerto
const port = 3000;

//crear servidoor http
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    res.end('Holamundo desde http nativo');
})

//levantar servidor
server.listen(port,()=>{
    console.log(`servidor corriedo en  http://localhost:${port}`);
})