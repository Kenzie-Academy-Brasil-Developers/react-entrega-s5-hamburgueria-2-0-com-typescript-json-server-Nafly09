import axios from "axios";

const api = axios.create({
  baseURL: "https://hamburgueria-api-nafly.herokuapp.com/",
});

export default api;
