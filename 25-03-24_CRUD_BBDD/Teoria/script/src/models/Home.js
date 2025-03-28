const mongoose = require('mongoose');
//definir el esquema de home

const homeSchema = new mongoose.Schema({

})

const Home = mongoose.model('Home',homeSchema);

module.exports = Home;