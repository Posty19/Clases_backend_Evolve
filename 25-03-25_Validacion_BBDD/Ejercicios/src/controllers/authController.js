const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET || "tu_secreto_jwt"; // esto se externaliza a un fichero externo, variables de entorno

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user)
      return res.status(401).json({ message: "Credenciales invalidas" });

    const isValidPassword = await user.comparePassword(password);
    bcrypt.compare(candidatePassword,this.password)
    if (!isValidPassword)
      return res.status(401).json({ message: "Contraseña invalida" });

    //creamos el TOKEN
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      exoiresIn: "24h",
    });

    //configurar la cookie del token
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, //se cambia en produccion
      sameSite: "lax",
      path: "/", // valida en todo el dominio
      maxAge: 24 * 60 * 60 * 1000,
      domain: "localhost",
      signed: true,
    });

    console.log("Token generado:", token);
    console.log("Cookie configurada:", res.getHeader("Set-Cookie"));

    //enviar el token en el cuerpo de la respuesta (https)
    res.json({
      success: "OK",
      message: "Login exitoso",
      token: token,
      user: {
        id: user._id,
        email: user.email,
        nombre: user.nombre,
      },
    });
  } catch (e) {
    console.log("Error de login", e);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

const logout = async (req,res)=>{

}
module.exports = {login,logout}