import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";

import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const app = express();
const PORT = process.env.PORT || 4000;

const MONGO_URI = "mongodb://localhost:27017/graphql-test-db";
const MONGOOSE_OPTIONS: mongoose.ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(MONGO_URI, MONGOOSE_OPTIONS, () => {
  console.log("Connected to MongoDB");
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}: http://localhost:${PORT}${server.graphqlPath}`);
});