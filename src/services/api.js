import axios from "axios";

const openDOTA = axios.create({
  baseURL: "https://api.opendota.com/api/",
});

export default openDOTA;
