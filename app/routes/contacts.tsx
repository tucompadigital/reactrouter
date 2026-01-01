import type { MetaFunction } from "react-router";
import { Form } from "react-router";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const meta: MetaFunction = () => {
    return [
        { title: "Contact | DevSecs" },
        { name: "description", content: "Get in touch with DevSecs for your next project" },
    ];
};

export default function Contact() {
    return (
        <div className="min-h-screen pt-20 pb-20 px-6">
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Have a project in mind? Let's discuss how we can work together.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Email</h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            hello@devsecs.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Phone</h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            +1 (555) 123-4567
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Location</h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            San Francisco, CA<br />
                                            Working remotely worldwide
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950 rounded-2xl">
                                <h3 className="text-2xl font-bold mb-4">What happens next?</h3>
                                <ul className="space-y-3">
                                    {[
                                        "We'll schedule a discovery call",
                                        "Discuss your project requirements",
                                        "Provide a detailed proposal",
                                        "Start development within 48 hours"
                                    ].map((step, index) => (
                                        <li key={index} className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-white text-sm font-bold">✓</span>
                                            </div>
                                            <span className="text-gray-700 dark:text-gray-300">{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                            <Form method="post" className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="project" className="block text-sm font-medium mb-2">
                                        Project Type
                                    </label>
                                    <select
                                        id="project"
                                        name="project"
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    >
                                        <option value="">Select project type</option>
                                        <option value="web">Web Application</option>
                                        <option value="mobile">Mobile App</option>
                                        <option value="ecommerce">E-commerce</option>
                                        <option value="saas">SaaS Platform</option>
                                        <option value="consulting">Technical Consulting</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Project Details
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 font-medium text-lg"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}