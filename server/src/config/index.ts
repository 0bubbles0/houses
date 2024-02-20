import settings from "./settings";

const config = () => {
  if (!settings.http.port) {
    throw new Error("HTTP port is missing in config");
  }

  if (!settings.mongo.url || typeof settings.mongo.url !== "string") {
    throw new Error("Mongo URL is missing in config");
  }

  return settings;
};

export default config;
