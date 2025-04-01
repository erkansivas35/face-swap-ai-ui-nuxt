import { useApiFetch } from "../api";

export const faceSwapService = {
  // Upload source and target images
  uploadImages: async (sourceImage, targetImage) => {
    const formData = new FormData();
    formData.append("sourceImage", sourceImage);
    formData.append("targetImage", targetImage);

    return await useApiFetch("/swap-faces", {
      method: "POST",
      body: formData,
    });
  },
  getHistoryFaceSwap: async () => {
    return await useApiFetch("/face-swap", {
      method: "GET",
    });
  },
};
