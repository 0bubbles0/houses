import axios from "axios";
import { PUBLIC_CONFIG } from "../config";

const apiConnection = axios.create({ baseURL: PUBLIC_CONFIG.apiBaseUrl });

export const getAll = () => apiConnection.get("/");

const api = {
  getAll,
};

export default api;
