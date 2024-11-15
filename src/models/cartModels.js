const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    id_carrito: { type: String, require: true },
    user: 
    { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true 
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product", 
                required: true
            },
            quantity: { type: Number, required: true, default: 1 },
        }
    ],
    subtotal: { type: Number, required: true, default: 0 },
    IVA: { type: Number, required: true, default: .16 },
    total: { type: Number, required: true, default: 0 },
    status: { type: String, enum: ['ACTIVE', 'INACTIVE'], default: 'ACTIVE' },
    creationDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: null }
});

const cart = mongoose.model('cart', cartSchema);

module.exports = cart;