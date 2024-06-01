import { useNavigate } from "react-router-dom";

function Navbar() {	
	const navigate = useNavigate();

	const handleSignUp = () => {
		navigate('/signup');
	}
    const handleSignIn = () => {
		navigate('/signin');
	}
	return (
		<div className="flex justify-between items-center p-2 bg-black text-white rounded-md">
			<div className="">
				<button className="text-3xl font-bold" onClick={() => navigate("/")}>Todo App</button>
			</div>
			<div className="flex flex-col sm:flex-row items-center p-2 justify-center gap-3">
				<a className="">Home</a>
				<a className="">Contact</a>
				<a>About Us</a>
				<button onClick={handleSignUp} className="border-2 border-white p-2 rounded-lg font-bold hover:bg-white hover:text-black transition-all duration-500">Sign Up</button>
				<button onClick={handleSignIn} className="border-2 border-white p-2 rounded-lg font-bold hover:bg-white hover:text-black transition-all duration-500">Sign In</button>
			</div>
		</div>
	);
}

export default Navbar;