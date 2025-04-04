const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "tu_secreto_jwt";

const veryfyToken = (req, res, next) => {
  console.log("=== Verificacion de Token ===");
  console.log("Cookies completas", req.cookies);
  console.log("Cookies firmadas", req.signedCookies);
  console.log("Headers completas", req.headers);

  //obtener el token de la cookie firmada
  const token = req.signedCookies.token;

  if (!token) {
    console.log("token no encontrado en cookies firmadas");
    return res.status(401).json({
      success: "NOK",
      message: "Se requiere un token para la autenticacion",
    });
  }
  try {
    const decoded = jwt.verify(token,JWT_SECRET);
    console.log('token verificado correctamente',decoded);
    req.user = decoded;
    next();
  } catch (e) {
    console.log('Error al verificar el token: ',e);
    res.status(401).json({
        success: "NOK",
        message: "Token invalido o expirado",
      })
  }
};

module.exports = veryfyToken;