import { useRouter } from "vue-router";

// Optional third-party libraries
import $ from "jquery";
import _ from "lodash";
import "dropzone/dist/dropzone-min.js";

window._ = _;
window.$ = $;
window.jQuery = $;

// Preline UI
import("preline/dist");

export default defineNuxtPlugin(() => {
  const router = useRouter();

  router.afterEach(async () => {
    // setTimeout(() => window.HSStaticMethods.autoInit());
  });
});
