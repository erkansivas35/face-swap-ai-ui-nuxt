import { useAuthStore } from "@/store/auth.js";

export default defineNuxtRouteMiddleware((to, from) => {
  const tokenCookie = useCookie("token");
  const userCookie = useCookie("user");
  const { getUser } = useAuthStore();

  if (tokenCookie.value && !userCookie.value) {
    getUser();
  }

  // CUSTOM 404 PAGE
  if (!to.matched.length) {
    return navigateTo("/404");
  }
});
