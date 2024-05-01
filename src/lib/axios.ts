import Axios, { type InternalAxiosRequestConfig } from "axios";

import { API_URL } from "@/config";
import storage from "@/utils/localStorage";

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
	const token = storage.getToken();
	if (token) {
		config.headers.authorization = `${token}`;
	}
	config.headers.Accept = "application/json";
	return config;
}

export const axios = Axios.create({
	// biome-ignore lint/style/useNamingConvention: <explanation>
	baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		//you can add your error handling here//

		return Promise.reject(error);
	},
);
