import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import sellerRoutes from "./routes/sellerRoutes.js";
import verifySellerMW from "./src/middleware/verifySeller.js";
import {
  decryptAccessToken,
  decryptAccessTokenMW,
} from "./src/helper/jwtToken.js";
import setType from "./src/helper/setType.js";
import cors from "cors";
import bodyParser from "body-parser";
import http from "http";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolver.js";
import cookieParser from "cookie-parser";

// SETUP FOR REST AND GRAPHQL
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${env}` });
console.log("NODE_ENV", process.env.ENV, env);
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
// to bypass cors error, accept json data
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://course-selling-9mk18t0bb-auspy.vercel.app",
    ],
    credentials: true,
  }),
  bodyParser.json(),
  cookieParser()
);
// user
app.use("/u", userRoutes);
// seller
app.use("/s", (req, res, next) => setType("admin", req, next), authRoutes); // not encrypted routes
app.use("/s", decryptAccessTokenMW, verifySellerMW, sellerRoutes); // s stands for seller

// ATTACHING GRAPHQL MIDDLEWARE TO EXPRESS
app.use(
  "/graphql",
  expressMiddleware(server, {
    context: async ({ req, res }) => {
      // console.log("Request headers", req.body);
      // Verify and decode JWT token from request headers
      const token = req.cookies.authToken || "";
      // console.log("Token found in request", token);
      try {
        if (!token) return { res };
        const user = decryptAccessToken(token);
        console.log("User found in token", user);
        return { user, res };
      } catch (error) {
        // Handle token verification errors, if any
        console.error("Token verification error:", error);
        return null;
      }
    },
  })
);

await new Promise((resolve) => httpServer.listen({ port }, resolve));
console.log(`🚀 Server ready at ${port}`);

// MONGOOSE
const { connect, connection: conn } = mongoose;
const mongoUrl = process.env.MONGO_URI;
connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoCreate: true,
});

conn.once("open", (_) => {
  console.log("Database connected");
});

conn.on("error", (err) => {
  console.error("connection error:", err);
});
