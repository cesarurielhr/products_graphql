const User = require('../models/userModels');

module.exports = {
    getAllUsers: async () => {
        return await User.find();
    },
    getUserById: async (_id) => {
        return await User.findById(_id);
    },
    createUser: async (Name, email, password, address, registrationDate, userTipe, PaymentMethod) => {
        const user = new User({ Name, email, password, address, registrationDate, userTipe, PaymentMethod });
        return await user.save();
    },
    updateUser: async (_id, Name, email, password, address, registrationDate, userTipe, PaymentMethod) => {
        return await User.findByIdAndUpdate(_id, { Name, email, password, address, registrationDate, userTipe, PaymentMethod });
    },
    deleteUser: async (_id) => {
        return await User.findByIdAndDelete(_id);
    }
}