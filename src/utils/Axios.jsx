import axios from "axios";

const instance = axios.create({
  bacseURL: "https://api-aniwatch.onrender.com/anime",
});

export default instance;