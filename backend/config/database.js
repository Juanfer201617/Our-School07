const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://JuanVasquez:s1fAN5ZBhIFA3mbE@cluster0.q5yk2z0.mongodb.net/cluster0?retryWrites=true&w=majority`
mongoose.connect(URI);

module.exports = mongoose;

