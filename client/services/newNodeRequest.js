import axios from "axios";

export const newNodeRequest = axios.create({
  baseURL: "http://localhost/4000",
});
