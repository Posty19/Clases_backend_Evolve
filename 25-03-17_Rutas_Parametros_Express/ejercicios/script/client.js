//http://localhost:3000

const getUser = async () =>{
    try{
        const response = await fetch('http://localhost:3000/api?nombre=Denis&edad=27');
        const data = await response.json();
        console.log(data);
    }catch(e){
        console.log('Error:',e);
    }
}

const getName = async () =>{
    try {
        const response = await fetch('http://localhost:3000/api?Dani');
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.log('Error:',e);
    }
}

const postRegistro = async () =>{
    try {
        const user = { nombre: "daniel", edad: 28, mail: "mail@mail.es" };
        const response = await fetch("http://localhost:3000/registro", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          });
        const data = response.json();
        console.log(data);
    } catch (e) {
        console.log('Error:',e);
    }
}

const postUpdate = async ()=>{
    try {
        const userUpdate = { nombre: "Laura", edad: 24, mail: "mail2@mail2.es" };
        const response = await fetch("http://localhost:3000/actualizar", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userUpdate),
          });
        const data = response.json();
        console.log(data);
    } catch (e) {
        console.log('Error:',e);
    }
}

const postDelete = async ()=>{
    try {
        const userDelete = { nombre: "Laura" };
        const response = await fetch("http://localhost:3000/eliminar", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userDelete),
          });
        const data = response.json();
        console.log(data);
    } catch (e) {
        console.log('Error:',e);
    }
}

const getUsers = async () =>{
    try{
        const response = await fetch('http://localhost:3000/usuarios');
        const data = await response.json();
        console.log(data);
    }catch(e){
        console.log('Error:',e);
    }
}
getUser();
getName();
postRegistro();
postUpdate();
postDelete();
getUsers();