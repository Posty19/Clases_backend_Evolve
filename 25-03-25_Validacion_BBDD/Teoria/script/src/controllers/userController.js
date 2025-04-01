const userService = require("../services/userService");
const authService = require("../services/authService");

const userContoller = {
  register: async (req, res, next) => {
    try {
      const { userName, email, password } = req.body;
      
      const user = await userService.createUser({ userName, email, password });
      const token = authService.createToken(user._id);

      res.status(201).json({
        status: "success",
        token,
        data: { user },
      });
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await userService.authenticateUser(email, password);
      const token = authService.createToken(user._id);

      res.status(200).json({
        status: "success",
        token,
        data: { user },
      });
    } catch (error) {
      next(error);
    }
  },

  getProfile: async (req, res, next) => {
    try {
      const user = await userService.getUserById(req.user.id);
      res.status(200).json({
        status: "success",
        data: { user },
      });
    } catch (error) {
      next(error);
    }
  },
};

//Maneja la logica de cada ruta
//Usa servicios para operaciones complejas
//Maneja responses y errores

module.exports = userContoller;