import { axios } from "@/lib/axios";

import type { UserResponse } from "../types";

export type LoginCredentialsDto = {
	email: string;
	password: string;
};

export const loginWithEmailAndPassword = (
	data: LoginCredentialsDto,
): Promise<UserResponse> => {
	return axios.post("/auth/login", data);
};
