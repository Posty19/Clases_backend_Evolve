module.exports = (request,response,next)=>{
    console.log('404 not found')
   response.status(404).json({
    success:'NOK',
    message:'Pagina noo encontrada'
   })
}