import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:3000/api",
  baseURL: "https://empassignment.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
