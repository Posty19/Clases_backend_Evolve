// debemos de importar el objeto manejador
const {Client} = require('pg');

//objeto manejador
const client = new Client({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'admin1234',
    port:5432
});

//conexion con BD
client.connect() //es una promesa  
    .then( ()=> console.log('Se ha establecido la conexion con la BD'))
    .catch(error=>console.log('Se ha producido un error de conexion: '+error));

//funcion de crear tabla
async function createTable() {
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS usuarios(
                id SERIAL PRIMARY KEY,
                nombre VARCHAR(100),
                email VARCHAR(1000) UNIQUE
            );
        `;
        await client.query(query);
        console.log('Tabla usuarios creada o ya existente');
        
    } catch (error) {
        console.log('error en la tabla:',error);
    }
}

//funcion insertar usuario
async function insertUser(nombre,email) {
    try {
        const query = `
            INSERT INTO usuarios(nombre,email)
            VALUES ($1,$2)
            returning*;
        `;
        const res = await client.query(query,[nombre,email]);
        console.log('Usuario insertado',res.rows[0]);
        
    } catch (error) {
        console.log('error al añadir user:',error);
    }
}

//funcion obtener usuario
async function getUser() {
    try {
        const query = `
            SELECT * FROM usuarios
        `;
        const res = await client.query(query);
        console.log('Usuarios: ',res.rows);
        
    } catch (error) {
        console.log('error en la obtencion:',error);
    }
}

//funcion actualizar usuario
async function updateUser(id,nombre,emali) {
    try {
        const query = `
            UPDATE usuarios 
            SET nombre = $1, email = $2
            WHERE id = $3
            returning *
        `;
        const res = await client.query(query,[nombre,emali,id]);
        console.log('Usuario insertado',res.rows[0]);
        
    } catch (error) {
        console.log('error en la actualizacion:',error);
    }
}

//funcion eliminar usuario
async function deleteUser(id) {
    try {
        const query = `
            DELETE FROM usuarios 
            WHERE id = $1
            returning *
        `;
        const res = await client.query(query,[id]);
        console.log('Usuario Eliminado',res.rows[0]);
        
    } catch (error) {
        console.log('error en la eliminacion:',error);
    }
}

async function main() {
    await createTable();

    await insertUser('Daniel Postigo','Mail@mail.es');
    await insertUser('Fulano de tal','Mail2@mail2.es');

    await getUser();

    await updateUser(1,'Daniel Postigo','danielpostigo96@mail.es')

    await deleteUser(2);

    await getUser();

    //cerrar conexion
    await client.end();
    console.log('conexion cerrada');
}

main();