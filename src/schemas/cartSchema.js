const { gql } = require("apollo-server");

const categories = {
    NO_CATEGORY: 'NO_CATEGORY',
    ELECTRONICS: 'ELECTRONICS',
    CLOTHING: 'CLOTHING',
    FOOD: 'FOOD',
    TOYS: 'TOYS'
};

const typeDefs = gql`
 enum Category {
        ${Object.values(categories).join('\n')}
    }
  # Required type definitions for cart [Product, User, Address, Category]
  type Product {
    _id: ID!
    name: String
    description: String
    price: Float!
    category: Category!
    brand: String
    stock: Int!
    createdAt: String!
    imgs: [String!]
    product_key: String!
  }

  type Address {
    zip: String! 
    street: String 
    exterior: String 
    interior: String 
    neighborhood: String 
    city: String
    municipality: String 
    state: String 
    country: String 
  }

  type User {
    _id: ID!
    fullname: String
    email: String!
    password: String!
    address: Address!
    tel: String!
    registerDate: Date!
    userType: Roles!
    paymentMethod: [String!]
  }

  # Cart Type Definition and its requirements

  type Cart {
    _id: ID!
    user: User
    items: [CartItem!]
    subtotal: Float
    tax: Float
    total: Float
    status: String
    createdAt: String
    closedAt: String
  }

  type CartItem {
    productId: Product!
    quantity: Int!
  }

  input CartItemInput {
    productId: ID!
    quantity: Int!
  }

  type Query {
    getCartById(_id: ID!): Cart!
    getCartsByUser(user: ID!): [Cart!]!
    getActiveCart(user: ID!): [Cart!]!
  }

  type Mutation {
    createCart(user: ID!, items: [CartItemInput!]!): Cart!
    updateCart(_id: ID!, items: [CartItemInput!]!): Cart!
    closeCart(_id: ID!): Cart!
  }
`;

module.exports = typeDefs;