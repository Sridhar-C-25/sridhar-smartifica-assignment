import axios from "axios";

export const newApiRequest = axios.create({
  baseURL: "http://dev-oracle.tesoract.com:8000",
});
