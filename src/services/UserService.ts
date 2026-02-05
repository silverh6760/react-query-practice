import axios from "axios";
import { API_BASE_URL } from "../constants/BaseUrl";

export async function getUsers() {
  const res = await axios.get(API_BASE_URL);
  return res.data;
}
