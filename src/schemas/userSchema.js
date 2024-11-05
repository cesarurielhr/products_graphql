const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        _id: ID! 
        Name: String!
        email: String!
        password: String!
        address: String!
        registrationDate: String!
        userTipe: String!
        PaymentMethod: String!
    }
    
    type Query {
        users: [User]!
        user(_id: ID!): User
    }

    type Mutation {
        createUser(
            Name: String!
            email: String!
            password: String!
            address: String!
            registrationDate: String!
            userTipe: String!
            PaymentMethod: String!
        ): User!

        updateUser(
            _id: ID! 
            Name: String
            email: String
            password: String
            address: String
            registrationDate: String
            userTipe: String
            PaymentMethod: String!
        ): User!

        deleteUser(_id: ID!): User!
    }
`;

module.exports = typeDefs;