import { sveltekit } from "@sveltejs/kit/vite"
import tailwindcss from "@tailwindcss/vite"
import Icons from "unplugin-icons/vite"
import { defineConfig } from "vite"
import { FileSystemIconLoader } from "unplugin-icons/loaders"

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    Icons({
      compiler: "svelte",
      customCollections: {
        kuro: FileSystemIconLoader("./src/lib/icons/kuro")
      }
    }),
  ],
})
