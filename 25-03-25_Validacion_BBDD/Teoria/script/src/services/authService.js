const jwt = require('jsonwebtoken');
const secretKey = 'miClaveSecreta';

const authService = {
  createToken: (userId) => {
    return jwt.sign({ id: userId }, secretKey, { expiresIn: '1d' });
  },

  verifyToken: (token) => {
    return jwt.verify(token, secretKey);
  }
};

module.exports = authService;