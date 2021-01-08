import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "c44bcd2c30bdd8361a44243773d49b6f",
    language: "en-US",
  },
});

export default api;
