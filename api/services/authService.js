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
  verifyTurnstileToken: async (token) => {
    const config = useRuntimeConfig();
    const turnstileSecretKey = config.public.NUXT_TURNSTILE_SECRET_KEY || "";

    console.log(turnstileSecretKey);

    return await useApiFetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: {
        secret: turnstileSecretKey,
        response: token,
      },
    });
  },
};
