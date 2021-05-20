import axios from "axios";

export default axios.create({
  baseURL: "https://hiring-example-25770.botics.co/",
  headers: {
    "Content-type": "application/json"
  }
});
