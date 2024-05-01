import { axios } from "@/lib/axios";

import type { UserResponse } from "../types";

export type RegisterCredentialsDto = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
};

export const registerWithEmailAndPassword = (
	data: RegisterCredentialsDto,
): Promise<UserResponse> => {
	return axios.post("/auth/register", data);
};
