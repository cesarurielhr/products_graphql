const Cart = require('../models/cartModel');

module.exports = {

    getCartById: async (id) => {
        try {
            const cart = await Cart.findById(id)
            .populate("user") 
            .populate("items.productId");

            return cart;
        } catch (error) {
            console.error(error);
        }
    },

    getCartsByUser: async (userId) => {
        try {
            const cart = await Cart.find({ user: userId })
            .populate("user") 
            .populate("items.productId");

            return cart;
        } catch (error) {
            console.error(error);
        }
    },

    createCart: async (cart) => {
        return await Cart.create(cart);
    },

    updateCart: async ({ _id, ...args }) => {

        return await Cart.findByIdAndUpdate(_id, args, { new: true });
    },

    deleteCart: async (_id) => {
        return await Cart.findByIdAndDelete(_id);
    },
}

