import axios from "axios";
import { PUBLIC_CONFIG } from "../config";
import { House } from "../types/house";

const apiConnection = axios.create({ baseURL: PUBLIC_CONFIG.apiBaseUrl });

export const getAll = () => apiConnection.get("/");

export const createOne = (payload: House) => apiConnection.post("/", payload);

const api = {
  getAll,
  createOne,
};

export default api;
