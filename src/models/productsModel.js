const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true,},
    brand: { type: String, required: true },
    stock: { type: Number, required: true },
    createdAt: { type: Date, required: true},
    image: { type: Array, required: true }
});

module.exports = mongoose.model('Products', productsSchema);
