const { gql } = require("apollo-server");
const typeDefs = gql`
type Mutation {
  sendEmail(input: SendEmailInput!): EmailResponse!
}

input SendEmailInput {
  to: String!
  subject: String!
  text: String
  html: String
}

type EmailResponse {
  success: Boolean!
  message: String
}
`
module.exports = typeDefs