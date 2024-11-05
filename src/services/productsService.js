const Products = require('../models/productsModel');

module.exports = {
    getAllTask: async()=>{
        return await Products.find()

    },
    createProducts: async(products) => {
        const Products = new Products({products});
        return await Products.save();
    },
    updateTask: async(_id) => {
        return await Products.updateTask(_id);
       
    },
    deleteTask: async(_id) => {
        return await Products.findByIdAndDelete({_id});
    }
}