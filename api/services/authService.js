import { useApiFetch } from "../api";

export const authService = {
  login: async (params) => {
    return await useApiFetch("/auth/login", {
      method: "POST",
      body: params,
    });
  },
  register: async (params) => {
    return await useApiFetch("/auth/register", {
      method: "POST",
      body: params,
    });
  },
  getUser: async () => {
    return await useApiFetch("auth/me", {
      method: "GET",
    });
  },
};
