import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log(`Server started listening on port 4000: http://localhost:4000${server.graphqlPath}`);
});