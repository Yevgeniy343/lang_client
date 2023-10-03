import axios from "axios";
import {
  getTokenJuryFromLocalStorage,
  getJuryFromLocalStorage,
} from "./localStorage";

const { REACT_APP_URL_API } = process.env;

const customFetch = axios.create({
  // baseURL: "http://localhost:1000/api/",
  baseURL: `${REACT_APP_URL_API}/api/`,
});

customFetch.interceptors.request.use((config) => {
  const token = getTokenJuryFromLocalStorage();
  const user = getJuryFromLocalStorage();
  if (user) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default customFetch;
