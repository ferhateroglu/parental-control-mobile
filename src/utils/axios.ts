import assert from "assert";
import Axios from "axios";

assert(process.env.API_URL, "env variable not set: API_URL");

export const axios = Axios.create({
  baseURL: process.env.API_URL,
});
