import { toast } from 'vue3-toastify'

export async function useApiFetch(url, options = {}) {
  const config = useRuntimeConfig()
  const baseURL = config.public.NUXT_PUBLIC_BASE_API_URL || ''

  try {
    const { data, error } = await useFetch(url, {
      baseURL,
      ...options,
      headers: {
        ...(options.headers || {})
      },
      onRequest({ options }) {
        // You can add auth token here
        // options.headers.Authorization = `Bearer ${token}`
      },
      onResponseError({ response }) {
        if (response._data?.success === false && response._data.error?.message.includes('validation failed')) {
          toast.error('The images could not be verified. Please try again.')
        } else if (response._data?.error?.message) {
          toast.error(response._data.error.message)
        } else {
          toast.error('An error occurred. Please try again.')
        }
      }
    })

    if (error.value) {
      throw error.value
    }

    return data.value
  } catch (err) {
    throw err
  }
}