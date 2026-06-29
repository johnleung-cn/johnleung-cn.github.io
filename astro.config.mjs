import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://johnleung-cn.github.io",
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "monokai",
      wrap: true,
    },
  },
});
