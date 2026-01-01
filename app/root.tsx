import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	LiveReload,
	useLoaderData,
} from "react-router";
import type { LinksFunction } from "react-router";
import stylesheet from "./app.css?url";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: stylesheet },
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{ rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
	},
	{ rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
];

export async function loader() {
	return {
		ENV: {
			VALUE_FROM_CLOUDFLARE: process.env.VALUE_FROM_CLOUDFLARE,
		},
	};
}

export default function App() {
	const data = useLoaderData<typeof loader>();

	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
				<script
					dangerouslySetInnerHTML={{
						__html: `
              // Initialize dark mode from localStorage
              (function() {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
                
                // Store environment variables
                window.ENV = ${JSON.stringify(data.ENV)};
              })();
            `,
					}}
				/>
			</body>
		</html>
	);
}