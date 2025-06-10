const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI)

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('contact', contactSchema);