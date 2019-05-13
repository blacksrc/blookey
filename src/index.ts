import http from "http";
import express from "express";
import { applyMiddleware } from "./utils";
import middleware from "./middleware";

const { APP_HOST = 'http://localhost', APP_PORT = 3000 } = process.env;
const router = express();
const server = http.createServer(router);

applyMiddleware(middleware, router);

server.listen(APP_PORT, () =>
  console.info(`Running at ${APP_HOST}:${APP_PORT}/`)
);