const products = [
    { id: 1, name: "Laptop Gamer", category: "Electrónica", price: 1200, featured: true },
    { id: 2, name: "Teléfono Inteligente", category: "Electrónica", price: 800, featured: false },
    { id: 3, name: "Zapatillas Deportivas", category: "Moda", price: 100, featured: true },
    { id: 4, name: "Reloj Inteligente", category: "Electrónica", price: 250, featured: false },
    { id: 5, name: "Cámara Profesional", category: "Fotografía", price: 1500, featured: true },
    { id: 6, name: "Auriculares Bluetooth", category: "Electrónica", price: 150, featured: false },
    { id: 7, name: "Mochila de Viaje", category: "Accesorios", price: 90, featured: true }
  ];
  
  const reviews = [
    { reviewId: 1, productId: 1, rating: 5, comment: "Excelente laptop para gaming." },
    { reviewId: 2, productId: 2, rating: 4, comment: "Buen teléfono, aunque algo caro." },
    { reviewId: 3, productId: 3, rating: 5, comment: "Muy cómodas y duraderas." },
    { reviewId: 4, productId: 4, rating: 3, comment: "Esperaba más funciones por el precio." },
    { reviewId: 5, productId: 5, rating: 5, comment: "La mejor cámara que he probado." },
    { reviewId: 6, productId: 6, rating: 4, comment: "Buen sonido, aunque la batería dura poco." },
    { reviewId: 7, productId: 7, rating: 5, comment: "Perfecta para viajes largos y resistente." }
  ];

const express = require('express');
const router = express.Router();

router.get('/',(request,response)=>{

    response.status(200).json({succsess:'ok',products})
})

router.get('/featured',(rwques,response)=>{
    //Obtiene productos destacados, con un límite y categoría.
     

})

router.get('/cathegories/:mainCathrgory',(reques,response)=>{
    //Muestra productos filtrados por una categoría principal y opcionalmente por subcategorías

})

router.post('/',(reques,response)=>{
    //Permite la creación de un nuevo producto.

})

router.get('/:id/reviews',(request,reponse)=>{
    //Recupera reseñas de un producto especificado por su id, con filtros.
})

router.post('/:id/reviews',(request,response)=>{
    //Permite añadir una nueva reseña a un producto específico
})

router.put('/:id',(request,response)=>{
    //Actualiza los detalles de un producto.
})

router.get('/search',(reques,response)=>{
    // Permite realizar una búsqueda avanzada de productos.
})

module.exports=router;