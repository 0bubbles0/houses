interface ServiceConfig {
  http: { port: number };
  mongo: {
    url: string;
    host: string;
    port: number;
    db: string;
    authSource: string;
    auth: {
      user: string;
      password: string;
    };
  };
}

export default ServiceConfig;
