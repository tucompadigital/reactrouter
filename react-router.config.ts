// react-router.config.ts
import type { Config } from "@react-router/dev/config";

export default {
	future: {
		v8_viteEnvironmentApi: true, // Changed from unstable_viteEnvironmentApi
	},
	// Add any other configurations here
} satisfies Config;