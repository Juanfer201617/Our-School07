const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://JuanVasquez:s1fAN5ZBhIFA3mbE@<nombrecluster>.nzwbkjo.mongodb.net/<nombreBD>?retryWrites=true&w=majority`
mongoose.connect(URI);

module.exports = mongoose;

