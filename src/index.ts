import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import routes from "./services";

const { APP_HOST = 'http://localhost', APP_PORT = 3000 } = process.env;
const router = express();
const server = http.createServer(router);

applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});
process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

server.listen(APP_PORT, () =>
  console.info(`Running at ${APP_HOST}:${APP_PORT}/`)
);