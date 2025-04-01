import { toast } from "vue3-toastify";

export default defineNuxtRouteMiddleware((to, from) => {
  const tokenCookie = useCookie("token");

  if (!tokenCookie.value) {
    if (process.client || window) toast.warning("You are not logged in, you are being redirected to the Login page.");
    return navigateTo("/auth/login");
  }
});
