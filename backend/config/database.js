const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.q5yk2z0.mongodb.net/${process.env.NAME_DB}`
mongoose.connect(URI);

module.exports = mongoose;

