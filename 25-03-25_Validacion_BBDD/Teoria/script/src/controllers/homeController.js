//importar servicios
// const {} = require('../services/homeService')
const homeController = {
  async getHome(request, response) {
    const { idioma, temas } = request.query;
    const res = { idioma: "", temas: [] };
    if (idioma && temas) {
      res.idioma = idioma;
      res.temas.push(temas);
    } else {
      const error = new Error("faltan datos");
      next(error);
    }
    /*
    try{
        const data = await getHome()
        response.status(200).json(data)
    }
    */
    //response.status(200).json({ success: "ok", language: idioma, theme: temas });
    response.send(res);
  },
};

module.exports = homeController;
