// path: permite administracion y uso de rutas

const path = require("path");
const readline = require("readline");
const fs = require("fs");
const { error } = require("console");

// path
const filePath = path.join(__dirname, "../", "index.html");
const absolutepath = path.resolve(filePath);

const fileName = path.basename(filePath);

console.log(filePath);
console.log(absolutepath);
console.log(fileName);

//redline

/* const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 */
/* 
rl.question('¿Como te llamas?', name=>{
    console.log(`Hola ${name}`);
    rl.close();
})
 */

//process mandar argumentos atraves de node

//console.log(process.argv);
//const suma = (a, b) => +a + +b;
//console.log(suma(...process.argv.slice(2)));

//fs modulo de node que sirve para lectura y escritura de ficheros
//fs.readFile(/*ruta del archivo*/,/*codificacion de lectura */,/*callback */)
fs.readFile("prueba/archivo.txt", "utf8", (error, data) => {
  if (error) {
    console.log(`ha acurrido un error: ${error}`);
    return;
  }
  console.log(data);
});

fs.readFile("prueba/fichero.txt", "utf8", (error, data) => {
  if (error) {
    console.log(`ha acurrido un error: ${error}`);
    return;
  }
  console.log(data);
});
//sustitulle el contenido
fs.writeFile(
  "prueba/fichero.txt",
  "introduccion de nuebo texto",
  "utf8",
  (error, data) => {
    if (error) {
      console.log(`ha acurrido un error: ${error}`);
      return;
    }
    console.log(data);
  }
);
//agrega contenido
fs.appendFile(
  "prueba/fichero.txt",
  "\ncontenido añadido",
  "utf8",
  (error, data) => {
    if (error) {
      console.log(`ha acurrido un error: ${error}`);
      return;
    }
    console.log(data);
  }
);
//eliminar fichero
fs.unlink('prueba/fichero2.txt',(error)=>{
  if(error){
    console.log('fichero no eliminado',error)
  }else console.log('fichero eliminado')
});
//crear directorio
fs.mkdir('./prueba3',{recursive:true},(error)=>{
  if(error){
    console.log('directorio no creado',error);
  }else console.log('directorio creado');
})
//leer contenido de un directorio
fs.readdir('prueba',(error,files)=>{
  if(error) return;
  console.log(files);
})
//eliminar directorio
fs.rmdir('./prueba2',(error)=>{
  if(error){
    console.log('directorio no eliminado',error);
  }else console.log('directorio eliminado');
})

//extraer informacion de archivos

fs.stat('prueba/fichero.txt', (error,stats)=>{
  if(error)return;
  console.log(stats);
})

//copiar ficheros
fs.copyFile('prueba/fichero.txt','./fichero.txt',(error)=>{
  if(error)return;
  console.log('archivo copiado bien');
});
