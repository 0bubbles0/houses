import cors from "cors";
import express from "express";
import path from "path";

import getConfig from "./config";
import db from "./db";
import getRoutes from "./http/routes";
import logger from "./logger";

const config = getConfig();

const app = express();

db.connect(app, config);

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

getRoutes(app);

app.listen(config.http.port, () => {
  logger.info("Node Server is running on port", config.http.port);
});

export default app;
