import cors from "cors";
import express from "express";
import path from "path";

import getConfig from "./config";
import getRoutes from "./http/routes";

const config = getConfig();

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

getRoutes(app);

app.listen(config.http.port, () => {
  console.info("Node Server is running on port", config.http.port);
});

export default app;
