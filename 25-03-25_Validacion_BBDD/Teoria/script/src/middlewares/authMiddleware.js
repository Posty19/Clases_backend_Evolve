const authService = require('../services/authService');

const authMiddleware = {
  protect: async (req, res, next) => {
    try {
      let token;
      if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
      }

      if (!token) {
        throw new Error('No autorizado');
      }

      const decoded = authService.verifyToken(token);
      req.user = { id: decoded.id };
      next();
    } catch (error) {
      next(error);
    }
  },

  restrictTo: (...roles) => {
    return async (req, res, next) => {
      const user = await User.findById(req.user.id);
      if (!roles.includes(user.role)) {
        throw new Error('Acceso prohibido');
      }
      next();
    };
  }
};

module.exports = authMiddleware;