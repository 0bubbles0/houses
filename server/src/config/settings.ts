import ServiceConfig from "../types/ServiceConfig";

const settings: ServiceConfig = {
  http: {
    port: Number(process.env.HTTP_PORT) || 8080,
    // any other Microservice ports that this service uses
  },

  mongo: {
    url: process.env.MONGO_URL || "mongodb://db-mongo:27017/service-houses",
    host: process.env.MONGO_HOST || "mongo",
    port: process.env.MONGO_PORT ? parseInt(process.env.MONGO_PORT, 10) : 27017,
    db: process.env.MONGO_DB || "service-houses",
    authSource: process.env.MONGO_AUTH_SOURCE || "admin",
    auth: {
      user: process.env.MONGO_AUTH_USER || "root",
      password: process.env.MONGO_AUTH_PASSWORD || "secret",
    },
  },
};

export default settings;
