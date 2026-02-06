import axios from "axios";
import { API_BASE_URL } from "../constants/BaseUrl";
import type { User } from "../types/UserType";

export async function getUsers() {
	const res = await axios.get(API_BASE_URL);
	return res.data;
}

export async function createUser(newUser: User) {
	const res = await axios.post(API_BASE_URL, newUser);
	return res.data;
}

export async function deleteUser(id: string) {
	const res = await axios.delete(`${API_BASE_URL}/${id}`);
	return res.data;
}
