// app/routes/_index.tsx
import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
	return [
		{ title: "DevSecs | Modern Portfolio & Security Solutions" },
		{ name: "description", content: "Professional portfolio showcasing cutting-edge web development and cybersecurity solutions built with React and Cloudflare Workers." },
	];
};

// Simple SVG as text for icons
const Icon = ({ name, className = "w-6 h-6" }: { name: string; className?: string }) => {
	const icons: Record<string, string> = {
		arrow: "→",
		star: "★",
		check: "✓",
		zap: "⚡",
		shield: "🛡️",
		globe: "🌍",
		code: "</>",
		rocket: "🚀",
	};

	return <span className={className}>{icons[name] || "•"}</span>;
};

export default function Index() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			setIsDarkMode(true);
			document.documentElement.classList.add('dark');
		}
	}, []);

	const toggleDarkMode = () => {
		const newDarkMode = !isDarkMode;
		setIsDarkMode(newDarkMode);
		if (newDarkMode) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	};

	const features = [
		{
			icon: <Icon name="zap" />,
			title: "Lightning Fast",
			description: "Edge-deployed applications with Cloudflare Workers for sub-100ms response times",
			color: "from-yellow-400 to-orange-500"
		},
		{
			icon: <Icon name="shield" />,
			title: "Secure by Design",
			description: "Built-in security features with zero-trust architecture and DDoS protection",
			color: "from-green-400 to-emerald-600"
		},
		{
			icon: <Icon name="globe" />,
			title: "Global Scale",
			description: "Deployed across 300+ Cloudflare edge locations worldwide",
			color: "from-blue-400 to-cyan-500"
		},
		{
			icon: <Icon name="code" />,
			title: "Modern Stack",
			description: "React 19, TypeScript, Tailwind CSS, and React Router v7",
			color: "from-purple-400 to-pink-500"
		}
	];

	const projects = [
		{
			title: "AI-Powered Security Dashboard",
			description: "Real-time threat detection and visualization platform",
			tags: ["React", "Node.js", "WebSocket", "D3.js"],
			gradient: "from-blue-500 to-cyan-400"
		},
		{
			title: "Edge Computing Platform",
			description: "Serverless functions deployed globally on Cloudflare Workers",
			tags: ["Cloudflare", "WASM", "Rust", "React"],
			gradient: "from-purple-500 to-pink-400"
		},
		{
			title: "DevSecOps Pipeline",
			description: "Automated CI/CD with integrated security scanning",
			tags: ["GitHub Actions", "Docker", "Kubernetes", "Security"],
			gradient: "from-green-500 to-teal-400"
		}
	];

	const testimonials = [
		{
			name: "Alex Johnson",
			role: "CTO at TechCorp",
			content: "The team delivered exceptional performance improvements. Our site now loads 3x faster!",
		},
		{
			name: "Sarah Chen",
			role: "Lead Developer",
			content: "Security implementation was seamless. Their attention to detail is remarkable.",
		},
		{
			name: "Marcus Rivera",
			role: "Product Manager",
			content: "Transformed our legacy application into a modern, scalable platform.",
		}
	];

	return (
		<div className="min-h-screen">
			{/* Navigation */}
			<nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
				<div className="container mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
								<span className="text-white text-lg">⚡</span>
							</div>
							<span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								DevSecs
							</span>
						</div>

						{/* Desktop Menu */}
						<div className="hidden md:flex items-center space-x-8">
							<a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
							<a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Features</a>
							<a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
							<a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
						</div>

						<div className="hidden md:flex items-center space-x-4">
							<button
								onClick={toggleDarkMode}
								className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
								aria-label="Toggle dark mode"
							>
								{isDarkMode ? '☀️' : '🌙'}
							</button>
							<Link
								to="/contact"
								className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
							>
								<span>Get Started</span>
								<Icon name="arrow" className="w-4 h-4" />
							</Link>
						</div>

						{/* Mobile menu button */}
						<button
							className="md:hidden p-2"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label="Toggle menu"
						>
							{isMenuOpen ? '✕' : '☰'}
						</button>
					</div>

					{/* Mobile Menu */}
					{isMenuOpen && (
						<div className="md:hidden mt-4 pb-4 space-y-4">
							<a href="#home" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Home</a>
							<a href="#features" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Features</a>
							<a href="#projects" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Projects</a>
							<a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
							<div className="pt-4 border-t border-gray-200 dark:border-gray-800">
								<Link
									to="/contact"
									className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg"
									onClick={() => setIsMenuOpen(false)}
								>
									Get Started
								</Link>
							</div>
						</div>
					)}
				</div>
			</nav>

			{/* Hero Section */}
			<section id="home" className="pt-32 pb-20 px-6">
				<div className="container mx-auto">
					<div className="max-w-4xl mx-auto text-center">
						<div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 px-4 py-2 rounded-full mb-6">
							<span className="text-blue-500">⚡</span>
							<span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								Now Powered by Cloudflare Workers
							</span>
						</div>

						<h1 className="text-5xl md:text-7xl font-bold mb-6">
							<span className="block">Build the Future</span>
							<span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
								With Modern Web Tech
							</span>
						</h1>

						<p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
							Combining cutting-edge React development with enterprise-grade security on Cloudflare's global edge network.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
							<Link
								to="/projects"
								className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-lg font-medium"
							>
								<span>View Projects</span>
								<Icon name="arrow" className="w-5 h-5" />
							</Link>
							<Link
								to="/contact"
								className="border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-8 py-4 rounded-xl hover:border-blue-500 transition-all duration-300 text-lg font-medium"
							>
								Contact Me
							</Link>
						</div>

						{/* Stats */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
							{[
								{ value: "99.9%", label: "Uptime" },
								{ value: "<100ms", label: "Response Time" },
								{ value: "300+", label: "Edge Locations" },
								{ value: "24/7", label: "Security" }
							].map((stat, index) => (
								<div key={index} className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
									<div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
										{stat.value}
									</div>
									<div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-20 bg-gray-50 dark:bg-gray-900/50">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DevSecs</span>
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
							Enterprise-grade solutions with developer experience at heart
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{features.map((feature, index) => (
							<div
								key={index}
								className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
							>
								<div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
									<div className="text-white text-2xl">
										{feature.icon}
									</div>
								</div>
								<h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
									{feature.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="py-20">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
							Real-world applications built with modern technologies
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<div
								key={index}
								className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 text-white"
							>
								<div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
								<div className="relative p-8 h-full flex flex-col">
									<div className="flex-1">
										<h3 className="text-2xl font-bold mb-4">
											{project.title}
										</h3>
										<p className="text-gray-300 mb-6">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2">
											{project.tags.map((tag, tagIndex) => (
												<span
													key={tagIndex}
													className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm"
												>
													{tag}
												</span>
											))}
										</div>
									</div>
									<Link
										to="/projects"
										className="mt-8 w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl backdrop-blur-sm transition-all duration-300 group-hover:translate-x-2 flex items-center justify-center space-x-2"
									>
										<span>View Details</span>
										<Icon name="arrow" className="w-4 h-4" />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
				<div className="container mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							What Clients <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Say</span>
						</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
							>
								<div className="flex items-center mb-6">
									<div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
										<span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
									</div>
									<div>
										<h4 className="font-bold text-gray-900 dark:text-white">
											{testimonial.name}
										</h4>
										<p className="text-gray-600 dark:text-gray-400 text-sm">
											{testimonial.role}
										</p>
									</div>
								</div>
								<p className="text-gray-700 dark:text-gray-300 italic">
									"{testimonial.content}"
								</p>
								<div className="flex mt-4">
									{[...Array(5)].map((_, i) => (
										<Icon key={i} name="star" className="w-4 h-4 fill-yellow-400 text-yellow-400" />
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section id="contact" className="py-20">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-3xl p-12">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							Ready to Build Something <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Amazing?</span>
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
							Let's discuss how we can transform your ideas into reality with cutting-edge technology.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								to="/contact"
								className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-lg font-medium"
							>
								<Icon name="rocket" className="w-5 h-5" />
								<span>Start Your Project</span>
							</Link>
							<a
								href="mailto:hello@devsecs.com"
								className="border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-8 py-4 rounded-xl hover:border-blue-500 transition-all duration-300 text-lg font-medium"
							>
								hello@devsecs.com
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12">
				<div className="container mx-auto px-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center space-x-2 mb-6 md:mb-0">
							<div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
								<span className="text-white">⚡</span>
							</div>
							<span className="text-2xl font-bold">DevSecs</span>
						</div>

						<div className="flex space-x-6 mb-6 md:mb-0">
							<a href="https://github.com" className="hover:text-blue-400 transition">
								<Icon name="code" className="w-6 h-6" />
							</a>
							<a href="https://twitter.com" className="hover:text-blue-400 transition">
								<span className="text-2xl">𝕏</span>
							</a>
							<a href="https://linkedin.com" className="hover:text-blue-400 transition">
								<span className="text-2xl">in</span>
							</a>
						</div>

						<div className="text-gray-400 text-sm">
							© {new Date().getFullYear()} DevSecs. All rights reserved.
							<span className="block mt-2">Built with ❤️ using React & Cloudflare Workers</span>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}