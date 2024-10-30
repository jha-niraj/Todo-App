import { useState } from 'react';
import { Menu, X, Home, LayoutDashboard, Settings, User, Bell, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);  // Simulate auth status
	const [showNotifications, setShowNotifications] = useState(false);

	const menuItems = [
		{ icon: <Home className="h-5 w-5" />, text: "Home", href: "/" },
		{ icon: <LayoutDashboard className="h-5 w-5" />, text: "Dashboard", href: "/dashboard" },
		{ icon: <Settings className="h-5 w-5" />, text: "Settings", href: "/settings" },
	];

	return (
		<nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					{/* Logo Section */}
					<div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
						<div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
							<span className="text-white font-bold text-xl">T</span>
						</div>
						<span className="ml-2 text-xl font-bold text-gray-900">TaskFlow</span>
					</div>

					{/* Authenticated View */}
					{isAuthenticated ? (
						<div className="flex items-center">
							{/* Search Bar */}
							<div className="hidden md:flex items-center flex-1 max-w-md ml-8">
								<div className="w-full relative">
									<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<Search className="h-5 w-5 text-gray-400" />
									</div>
									<input
										type="text"
										className="block w-full pl-10 pr-3 py-2 border rounded-lg"
										placeholder="Search tasks..."
									/>
								</div>
							</div>

							{/* Menu Items */}
							<div className="hidden md:flex items-center space-x-4">
								{menuItems.map((item, index) => (
									<a key={index} href={item.href} className="px-3 py-2 rounded-lg flex items-center">
										{item.icon}
										<span>{item.text}</span>
									</a>
								))}
								{/* Notification Bell */}
								<button
									onClick={() => setShowNotifications(!showNotifications)}
									className="p-2 rounded-lg"
								>
									<Bell className="h-5 w-5" />
								</button>
								{/* Profile */}
								<button className="p-2 rounded-lg flex items-center space-x-2">
									<div className="h-8 w-8 rounded-full bg-blue-100">
										<User className="h-5 w-5 text-blue-600" />
									</div>
									<span className="text-sm font-medium text-gray-700">John Doe</span>
								</button>
							</div>
						</div>
					) : (
						// Not Authenticated View
						<div className="hidden md:flex items-center justify-center space-x-4">
							<button onClick={() => navigate("/signup")} className="px-3 py-2 rounded-lg bg-gray-200">
								Sign Up
							</button>
							<button onClick={() => navigate("/signin")} className="px-3 py-2 rounded-lg bg-blue-500 text-white">
								Sign In
							</button>
						</div>
					)}

					{/* Mobile Menu Button */}
					<div className="flex items-center md:hidden">
						<button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg">
							{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && isAuthenticated && (
				<div className="md:hidden">
					{/* Display authenticated mobile menu here */}
				</div>
			)}
			{isOpen && !isAuthenticated && (
				<div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white border-b flex flex-col items-end justify-end">
					<button onClick={() => {
							navigate("/signin")
							setIsOpen(c => !c)
						}} 
						className="block px-3 py-2 rounded-lg bg-blue-500 text-white"
					>
						Sign In
					</button>
					<button onClick={() => {
							navigate("/signup")
							setIsOpen(c => !c)
						}} 
						className="block px-3 py-2 rounded-lg bg-gray-200"
					>
						Sign Up
					</button>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
