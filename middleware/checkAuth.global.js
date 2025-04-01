import { useAuthStore } from "@/store/auth.js";

export default defineNuxtRouteMiddleware((to, from) => {
  const tokenCookie = useCookie("token");
  const { getUser } = useAuthStore();

  if (tokenCookie.value) {
    getUser();
  }
});
