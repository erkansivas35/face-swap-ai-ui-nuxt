import { toast } from "vue3-toastify";

export async function useApiFetch(url, options = {}) {
  const config = useRuntimeConfig();
  const baseURL = config.public.NUXT_PUBLIC_BASE_API_URL || "";
  const tokenCookie = useCookie("token");

  try {
    const { data, error } = await useFetch(url, {
      baseURL,
      ...options,
      headers: {
        ...(options.headers || {}),
        Authorization: tokenCookie.value ? `Bearer ${tokenCookie.value}` : "",
      },
      onRequest({ options }) {
        // You can add auth token here
        options.headers.Authorization = tokenCookie.value ? `Bearer ${tokenCookie.value}` : "";
      },
      onResponseError({ response }) {
        if (response._data?.success === false && response._data.error?.message.includes("validation failed")) {
          if (process.client || window) {
            toast.error("The images could not be verified. Please try again.");
          }
        } else if (response._data?.error?.message) {
          if (process.client || window) {
            toast.error(response._data.error.message);
          }
        } else {
          if (process.client || window) {
            toast.error("An error occurred. Please try again.");
          }
        }
      },
    });

    if (error.value) {
      throw error.value;
    }

    return data.value;
  } catch (err) {
    throw err;
  }
}
