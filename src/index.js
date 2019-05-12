import express from 'express';
import bodyParser from 'body-parser';
import customEnv from 'custom-env';
import console from 'better-console';
customEnv.env(process.env.NODE_ENV);

const app = express();
const { APP_HOST, APP_PORT } = process.env;

if (!APP_PORT) {
  throw new Error('APP_PORT is not defined in environment!');
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(APP_PORT, () => {
  console.info(`Running at ${APP_HOST}:${APP_PORT}/`);
});
