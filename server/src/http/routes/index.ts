import express, { Express } from "express";

import handlers from "../handlers";

const routes = (app: Express) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    // validation

    handlers.get(req, res);
  });

  router.post("/", (req, res) => {
    // validation

    handlers.create(req, res);
  });

  app.use("/api", router);
};

export default routes;
