import settings from "./settings";

const config = () => {
  if (!settings.http.port) {
    throw new Error("HTTP port is missing in config");
  }
  return settings;
};

export default config;
