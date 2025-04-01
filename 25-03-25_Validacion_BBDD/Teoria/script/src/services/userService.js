const User = require("../models/userModel");

const userService = {
  createUser: async (userData) => {
    return await User.create(userData);
  },

  authenticateUser: async (email, password) => {
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.comparePassword(password))) {
      throw new Error("Credenciales inválidas");
    }
    return user;
  },

  getUserById: async (userId) => {
    return await User.findById(userId).select("-password");
  },

  getAllUsers: async () => {
    return await User.find().select("-password");
  },
};

module.exports = userService;
