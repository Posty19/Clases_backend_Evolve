//metodo get

fetch("http://localhost:3000?nombre=Denis&edad=27")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Error: ", error));

fetch("http://localhost:3000?Dani")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Error: ", error));

//POST
const persona = { nombre: "daniel", edad: 28, mail: "mail@mail.es" };

fetch("http://localhost:3000/registro", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(persona),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Error: ", error));
