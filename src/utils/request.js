import config from "./config.js";
import ajax from "../api/ajax";
//import { reject } from "core-js/fn/promise";
export default (url, data = {}, method = "GET") => {
  return new Promise((resolve, reject) => {
    let promise;
    promise
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
