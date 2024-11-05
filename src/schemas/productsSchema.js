const {gql} = require('apollo-server');


const typeDefs = gql `
scalar Date
enum Category {
    Abarrotes
    Ropa
    Libros
    Juguetes
}

    type  Products {
        _id: ID!
        name: String!
        description: String!
        price: Float!
        category: Category!
        brand: String!
        stock: Int!
        createdAt:Date!
        image: [String!]!

    }
    type Query {
        products: [Products]!
    }
    type Mutation {
        createProducts(name: String!, descripction: String!,prices: Float!, category:Category!, brand:String!): Products!
        updateProducts(_id: ID!, completed: Boolean!): Products!
        deleteProducts(_id: ID!): Products!
    }
`;

module.exports = typeDefs;