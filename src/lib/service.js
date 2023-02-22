import axios from "axios";

export const fetchApi = axios.create({
  baseURL: "https://gorest.co.in/public/v1",
});
