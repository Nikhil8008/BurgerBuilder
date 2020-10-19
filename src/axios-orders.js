import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-45931.firebaseio.com/",
});

export default instance;
