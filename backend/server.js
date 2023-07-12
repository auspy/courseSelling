import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import sellerRoutes from "./routes/sellerRoutes.js";
import verifySeller from "./src/middleware/verifySeller.js";
import { decryptAccessToken } from "./src/helper/jwtToken.js";
import setType from "./src/helper/setType.js";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolver.js";

// SETUP FOR REST AND GRAPHQL
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

// PATHS
app.use(cors(), bodyParser.json());
// user
app.use("/u", userRoutes);
// seller
app.use(
  "/s",
  (req, res, next) => {
    console.log(req.body);
    setType("admin", req, next);
  },
  authRoutes
); // not encrypted routes
app.use("/s", decryptAccessToken, verifySeller, sellerRoutes); // s stands for seller

// ATTCHING GRAPHQL MIDDLEWARE TO EXPRESS
app.use(
  "/graphql",
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

await new Promise((resolve) => httpServer.listen({ port }, resolve));
console.log(`🚀 Server ready at http://localhost:${port}`);

// MONGOOSE
const { connect, connection: conn } = mongoose;
const mongoUrl = process.env.MONGO_URI;
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoCreate: true,
});

conn.once("open", (_) => {
  console.log("Database connected:", mongoUrl);
});

conn.on("error", (err) => {
  console.error("connection error:", err);
});
