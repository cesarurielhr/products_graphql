const { Query } = require('mongoose');
const userService = require('../services/userServices');

const resolvers = {
    Query: {
        users: () => {
            return userService.getAllUsers();
        },
        user: (_, { _id }) => {
            return userService.getUserById(_id);
        }
    },
    Mutation: {
        createUser: (_, { Name, email, password, address, registrationDate, userTipe, PaymentMethod }) => {
            return userService.createUser(Name, email, password, address, registrationDate, userTipe, PaymentMethod);
        },
        updateUser: (_, { _id, Name, email, password, address, registrationDate, userTipe, PaymentMethod }) => {
            return userService.updateUser(_id, Name, email, password, address, registrationDate, userTipe, PaymentMethod);
        },
        deleteUser: (_, { _id }) => {
            return userService.deleteUser(_id);
        },
    }
};

module.exports = resolvers;