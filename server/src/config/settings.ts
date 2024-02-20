import ServiceConfig from "../types/ServiceConfig";

const settings: ServiceConfig = {
  http: {
    port: Number(process.env.HTTP_PORT) || 8080,
    // any other Microservice ports that this service uses
  },
};

export default settings;
