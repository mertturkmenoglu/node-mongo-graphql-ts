import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Query {
    helloWorld: String!
    users: [User!]!
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    location: String
  }

  type Mutation {
    createUser(name: String!, age: Int!, location: String): User!
  }
`;