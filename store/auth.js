import { ref } from "vue";
import { authService } from "@/api/services/authService.js";

export const useAuthStore = () => {
  const cookieOptions = {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 7,
  };

  // Cookie
  const tokenCookie = useCookie("token", cookieOptions);
  const userCookie = useCookie("user", cookieOptions);

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
      userCookie.value = res.data;

      if (process.client || window) {
        setTimeout(() => {
          window.HSStaticMethods.autoInit();
        }, 200);
      }
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
