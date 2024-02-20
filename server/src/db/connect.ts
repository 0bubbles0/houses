import { Express } from "express";
import mongoose from "mongoose";

import ServiceConfig from "../types/ServiceConfig";
import logger from "../logger";

const connect = (app: Express, config: ServiceConfig) => {
  const options = {};

  const connectWithRetry = () => {
    mongoose.Promise = global.Promise;
    logger.info("MongoDB connection with retry", config);

    mongoose
      .connect(config.mongo.url, options)
      .then(() => {
        logger.info("MongoDB is connected");
        app.emit("ready");
      })
      .catch((err) => {
        logger.error(
          "MongoDB connection unsuccessful, retry after 2 seconds.",
          err,
        );
        setTimeout(connectWithRetry, 2000);
      });
  };

  connectWithRetry();
};

export default connect;
