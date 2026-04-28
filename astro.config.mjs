import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://appcubic.com",
  output: "static",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
});
