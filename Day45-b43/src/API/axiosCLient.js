import axios from "axios";
import queryString from "query-string";
const REACT_APP_API_URL = "https://api-exercise-trello.vercel.app/api/v1";
const axiosClient = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  const apiKey = localStorage.getItem("apiKey");
  console.log("apikey : ", apiKey);
  if (apiKey) {
    config.headers["X-Api-Key"] = apiKey;
  }
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
