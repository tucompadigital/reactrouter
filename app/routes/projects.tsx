// app/routes/projects.tsx - Projects page
import { LuArrowRight as ArrowRight } from "react-icons/lu";
import { LuSparkles as Sparkles } from "react-icons/lu";
import { LuZap as Zap } from "react-icons/lu";
import { LuGlobe as Globe } from "react-icons/lu";
import { LuShield as Shield } from "react-icons/lu";
import { LuCode as Code } from "react-icons/lu";
import { LuStar as Star } from "react-icons/lu";
import { LuRocket as Rocket } from "react-icons/lu";
import { LuCheckCircle as CheckCircle } from "react-icons/lu";
import { LuGithub as Github } from "react-icons/lu";
import { LuTwitter as Twitter } from "react-icons/lu";
import { LuLinkedin as Linkedin } from "react-icons/lu";
import { LuMenu as Menu } from "react-icons/lu";
import { LuX as X } from "react-icons/lu";
import { LuMail as Mail } from "react-icons/lu";
import { LuPhone as Phone } from "react-icons/lu";
import { LuMapPin as MapPin } from "react-icons/lu";
import { LuSend as Send } from "react-icons/lu";
import { LuExternalLink as ExternalLink } from "react-icons/lu";
import { LuArrowUpRight as ArrowUpRight } from "react-icons/lu";


export const meta: MetaFunction = () => {
    return [
        { title: "Projects | DevSecs" },
        { name: "description", content: "Explore our portfolio of cutting-edge projects" },
    ];
};

const projects = [
    {
        title: "AI Security Analytics Platform",
        description: "Real-time threat detection using machine learning algorithms with interactive dashboards and automated response systems.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
        tags: ["AI/ML", "React", "Python", "WebSocket"],
        github: "https://github.com",
        demo: "https://demo.devsecs.com",
        featured: true
    },
    {
        title: "Cloudflare Edge Functions",
        description: "Serverless platform for deploying globally distributed applications with automatic scaling and DDoS protection.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800",
        tags: ["Cloudflare", "TypeScript", "WASM", "Edge Computing"],
        github: "https://github.com",
        demo: "https://edge.devsecs.com",
        featured: true
    },
    {
        title: "React Design System",
        description: "Comprehensive component library with accessibility features, dark mode, and full TypeScript support.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800",
        tags: ["React", "TypeScript", "Storybook", "Tailwind"],
        github: "https://github.com",
        demo: "https://ui.devsecs.com",
        featured: false
    },
    {
        title: "E-commerce Microservices",
        description: "Scalable e-commerce platform built with microservices architecture and real-time inventory management.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800",
        tags: ["Node.js", "Docker", "Kafka", "React"],
        github: "https://github.com",
        demo: "https://shop.devsecs.com",
        featured: false
    },
    {
        title: "Mobile Banking App",
        description: "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800",
        tags: ["React Native", "GraphQL", "Security", "Mobile"],
        github: "https://github.com",
        demo: "https://mobile.devsecs.com",
        featured: false
    },
    {
        title: "DevOps Automation Suite",
        description: "Complete CI/CD pipeline automation with monitoring, logging, and deployment orchestration.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800",
        tags: ["Kubernetes", "Terraform", "GitHub Actions", "Monitoring"],
        github: "https://github.com",
        demo: "https://devops.devsecs.com",
        featured: false
    }
];

export default function Projects() {
    return (
        <div className="min-h-screen pt-20 pb-20 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Explore our portfolio of innovative solutions built with modern technologies
                    </p>
                </div>

                <div className="mb-12 flex flex-wrap gap-4 justify-center">
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium">
                        All Projects
                    </button>
                    <button className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                        Web Applications
                    </button>
                    <button className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                        Mobile Apps
                    </button>
                    <button className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                        AI/ML
                    </button>
                    <button className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                        DevOps
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {project.featured && (
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-medium rounded-full">
                                        Featured
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span>Code</span>
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        to="/contact"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 text-lg font-medium"
                    >
                        <span>Start Your Project</span>
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}