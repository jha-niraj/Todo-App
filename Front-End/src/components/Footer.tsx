import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

const Footer = () => {
	const quickLinks = [
		{ name: 'Dashboard', href: '/dashboard' },
		{ name: 'My Tasks', href: '/tasks' },
		{ name: 'Calendar', href: '/calendar' },
		{ name: 'Analytics', href: '/analytics' },
	];

	const resources = [
		{ name: 'Documentation', href: '/docs' },
		{ name: 'Help Center', href: '/help' },
		{ name: 'API Reference', href: '/api' },
		{ name: 'Community', href: '/community' },
	];

	// const company = [
	// 	{ name: 'About Us', href: '/about' },
	// 	{ name: 'Careers', href: '/careers' },
	// 	{ name: 'Blog', href: '/blog' },
	// 	{ name: 'Contact', href: '/contact' },
	// ];

	return (
		<footer className="py-10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="space-y-6">
						<div className="flex items-center">
							<div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-xl">T</span>
							</div>
							<span className="ml-2 text-xl font-bold text-gray-900">TaskFlow</span>
						</div>
						<p className="text-gray-600 text-sm">
							Streamline your workflow and boost productivity with our intuitive task management platform.
						</p>
						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<Mail className="h-5 w-5 text-gray-400" />
								<span className="text-gray-600 text-sm">support@taskflow.com</span>
							</div>
							<div className="flex items-center space-x-3">
								<Phone className="h-5 w-5 text-gray-400" />
								<span className="text-gray-600 text-sm">+1 (555) 123-4567</span>
							</div>
							<div className="flex items-center space-x-3">
								<MapPin className="h-5 w-5 text-gray-400" />
								<span className="text-gray-600 text-sm">123 Business Ave, Suite 100<br />San Francisco, CA 94107</span>
							</div>
						</div>
					</div>

					<div>
						<h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-3">
							{quickLinks.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className="text-gray-600 hover:text-blue-600 flex items-center group"
									>
										<ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
										<span className="text-sm">{link.name}</span>
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
						<ul className="space-y-3">
							{resources.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className="text-gray-600 hover:text-blue-600 flex items-center group"
									>
										<ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
										<span className="text-sm">{link.name}</span>
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-gray-900 font-semibold mb-4">Stay Updated</h3>
						<p className="text-sm text-gray-600 mb-4">
							Subscribe to our newsletter for the latest updates and features.
						</p>
						<form className="space-y-3">
							<div className="relative">
								<input
									type="email"
									placeholder="Enter your email"
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
								/>
								<button
									type="submit"
									className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-1.5 rounded-md hover:bg-blue-700 transition-colors duration-200"
								>
									<CheckCircle2 className="h-4 w-4" />
								</button>
							</div>
						</form>
						<div className="mt-6">
							<h4 className="text-sm font-semibold text-gray-900 mb-3">Follow Us</h4>
							<div className="flex space-x-4">
								<a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
									<Facebook className="h-5 w-5" />
								</a>
								<a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
									<Twitter className="h-5 w-5" />
								</a>
								<a href="#" className="text-gray-400 hover:text-pink-600 transition-colors duration-200">
									<Instagram className="h-5 w-5" />
								</a>
								<a href="#" className="text-gray-400 hover:text-blue-800 transition-colors duration-200">
									<Linkedin className="h-5 w-5" />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-200 py-3">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="text-sm text-gray-600">
							© {new Date().getFullYear()} TaskFlow. All rights reserved.
						</div>
						<div className="flex space-x-6">
							<a href="/privacy" className="text-sm text-gray-600 hover:text-blue-600">
								Privacy Policy
							</a>
							<a href="/terms" className="text-sm text-gray-600 hover:text-blue-600">
								Terms of Service
							</a>
							<a href="/cookies" className="text-sm text-gray-600 hover:text-blue-600">
								Cookie Policy
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;