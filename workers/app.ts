import { createRequestHandler } from "react-router";
// @ts-ignore - Vite handles this virtual import
import * as build from "virtual:react-router/server-build";

// This creates the actual handler using the React Router build
const requestHandler = createRequestHandler(build, import.meta.env.MODE);

export default {
	async fetch(request, env, ctx) {
		// This passes the request and Cloudflare context (env, ctx) to React Router
		return requestHandler(request, {
			cloudflare: { env, ctx },
		});
	},
} satisfies ExportedHandler;