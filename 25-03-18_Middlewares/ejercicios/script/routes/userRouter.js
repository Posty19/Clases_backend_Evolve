let users = [
    { id: 1, name: "Juan Pérez", age: 30, city: "Buenos Aires", role: "admin" },
    { id: 2, name: "María López", age: 25, city: "Madrid", role: "user" },
    {
      id: 3,
      name: "Carlos García",
      age: 40,
      city: "México D.F.",
      role: "editor",
    },
    { id: 4, name: "Ana Torres", age: 35, city: "Lima", role: "user" },
    { id: 5, name: "Luis Fernández", age: 28, city: "Bogotá", role: "moderator" },
    { id: 6, name: "Elena Rojas", age: 22, city: "Santiago", role: "user" },
    { id: 7, name: "Roberto Díaz", age: 45, city: "Montevideo", role: "admin" },
  ];
  const posts = [
      { postId: 1, userId: 1, title: "Mi primer post", content: "Este es el contenido de mi primer post." },
      { postId: 2, userId: 1, title: "Post sobre tecnología", content: "Hablando de las últimas tendencias tech." },
      { postId: 3, userId: 2, title: "Viajes y aventuras", content: "Explorando el mundo." },
      { postId: 4, userId: 3, title: "Recetas de cocina", content: "Cocinando con amor." },
      { postId: 5, userId: 4, title: "Fotografía creativa", content: "Consejos para capturar momentos increíbles." },
      { postId: 6, userId: 5, title: "Música y cultura", content: "Explorando nuevos géneros musicales." },
      { postId: 7, userId: 6, title: "Desarrollo web", content: "Guía básica para empezar en el mundo del desarrollo web." }
    ];

const express = require('express');
const router = express.Router();

router.get("/", ( error,request, response,next) => {
    const {edad,ciudad}= request.query;
    let filtredUss = {};
    users.forEach(us=>{
        if(us.city==ciudad && us.age == edad){
            filtredUss = us;
        }
    })
    console.log(filtredUss)
    response.status(200).json({
        succsess:'ok',
        usuarios:filtredUss
    })
   
});

router.post("/new", (request, response) => {
  const { name,age,city,role } = request.body;
  console.log(request.body);
  
  const user={ id:users.length,name:name,age:age,city:city,role:role}

  users.push(user);
  response.status(200).json({
    succsess: "Ok",
    id: user.id,
    name: user.name,
    age: user.age,
    city: user.city,
    role: user.role,
  });
});

router.get("/:id/profile", (request, response) => {
  const { id } = request.params;
  const user = users.filter((us) => {
    if (us.id == id) return us;
  });
  console.log('user id '+id);
  console.log(user);
  response.status(200).json({
    succsess: "Ok",
    id: user.id,
    name: user.name,
    age: user.age,
    city: user.city,
    role: user.role,
  });
});

router.post("/", (error, request, response, next) => {
    const { name,age,city,role } = request.body;
    console.log(request.body);
    
    const user={ id:users.length,name:name,age:age,city:city,role:role}
  
    users.push(user);
    response.status(200).json({
      succsess: "Ok",
      id: user.id,
      name: user.name,
      age: user.age,
      city: user.city,
      role: user.role,
    });
});

router.put("/:id", (request, response) => {
  const { id } = request.params;
  const { user } = request.body;
  users = users.map((us) => (us.id === id ? user : us));
  console.log(users);
  response.status(200).json({
    succsess: "Ok",
  });
});

router.delete("/:id", (request, response) => {
  const { id } = request.params;
  users = users.map((us) => (us.id === id ? user.deleted=true : us));
  console.log(users);
  response.status(200).json({
    succsess: "Ok",
    users:users
  });
});

router.get("/:id/posts/:postId", (request, response) => {
    const {id,postiD} = request.params;
    const post = posts.filter(p=>{
        if(p.postId==postiD) return p;
    })
    console.log(post);
    response.status(200).json({
        succsess: "Ok",
        post:post
      });
});

router.get("/search", (request, response) => {
    response.status(200).json({
        succsess: "Ok",
        users,
      });
});
module.exports = router;