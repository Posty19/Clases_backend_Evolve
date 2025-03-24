//http://localhost:3000

const getHome = async () =>{
    try{
        const response = await fetch('http://localhost:3000/home?idioma=es&temas=comics');
        const data = await response.json();
        console.log(data);
    }catch(e){
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
getHome

