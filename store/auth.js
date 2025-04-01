import { ref } from "vue";
import { authService } from "@/api/services/authService.js";

export const useAuthStore = () => {
  // Cookie
  const tokenCookie = useCookie("token");
  const userCookie = useCookie("user");

  const service = authService;

  // State
  const loggedIn = ref(!!tokenCookie.value);
  const user = ref(userCookie.value ?? null);

  // Actions
  const login = (res) => {
    tokenCookie.value = res.token;
    loggedIn.value = true;
    userCookie.value = res.data;
    setTimeout(() => {
      window.HSStaticMethods.autoInit();
    }, 200);
  };

  const logout = () => {
    tokenCookie.value = null;
    userCookie.value = null;
    loggedIn.value = false;
    user.value = null;
  };

  const getUser = async () => {
    try {
      const res = await service.getUser();
      user.value = res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    loggedIn,
    user,
    login,
    logout,
    getUser,
  };
};
