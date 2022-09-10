const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    author: [String]
    description: String
    bookID: String
    image: String
    title: String

  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Query {
    book: [Book]
    user(username: String!): User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth)
    addComment(
        thoughtId: ID!
        commentText: String!
        commentAuthor: String!
      ): Thought
      removeThought(thoughtId: ID!): Thought
      removeComment(thoughtId: ID!, commentId: ID!): Tho
  }
`;

module.exports = typeDefs;