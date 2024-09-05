import axios from "axios";

const instance = axios.create({
  bacseURL: "https://anime-backend-lyart.vercel.app/anime",
  headers: {
    accept: "application/json",
  },
});

export default instance;