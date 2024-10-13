import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// Official Launch on WorldDelights.com Was: October-13-2024

// https://astro.build/config
export default defineConfig({
  site: "https://worlddelights.com",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})