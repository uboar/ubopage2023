import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [sveltekit(), tsConfigPaths()],
});
