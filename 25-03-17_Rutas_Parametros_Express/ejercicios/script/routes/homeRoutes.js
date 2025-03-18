const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  const { idioma, tema } = request.query;
  response
    .status(200)
    .json({ success: "ok", data: { idioma: idioma, tema: tema } });
});

router.get("/about", (response, request) => {
  response
    .status(200)
    .json({ success: "ok", message: "mensaje sobre nosotros" });
});

router.post("/contact", (response, request) => {
  const { nombre, mail, phone } = request.body;
  response
    .status(200)
    .json({
      success: "ok",
      data: { nombre: nombre, mail: mail, phone: phone },
    });
    response.end();
});

module.exports = router;
