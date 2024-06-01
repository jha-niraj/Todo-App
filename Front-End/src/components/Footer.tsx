const Footer = () => {
    return (
		<div className="flex flex-col items-center justify-center bg-black rounded-md text-white p-3">
			<div>
				<h3 className="font-bold text-md">© 2023 Todo App. All rights reserved to Niraj Jha</h3> 
			</div>
			<div className="flex items-center justify-center gap-5">
				<a href="https://www.github.com/jha-niraj" className="font-bold hover:scale-105 transition-all" target="_blank">Niraj Jha</a>
				<a href="https://www.google.com" className="font-bold hover:scale-105 transition-all" target="_blank">Sonali Jha</a>
			</div>
		</div>
	);
}

export default Footer;