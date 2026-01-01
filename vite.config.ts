import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin"; // Add this
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		cloudflare(), // Add this BEFORE reactRouter()
		reactRouter(),
		tsconfigPaths(),
	],
});