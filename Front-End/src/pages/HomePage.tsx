import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HomePageImage from "../assets/homepage-imakge.jpg";

const HomePage = () => {
    return (
        <section className="w-full">
            <Navbar />
            <section className="flex flex-col items-center justify-center w-full bg-slate-200 rounded-lg">
                <section className="flex items-center justify-center sm:w-[90%] flex-col sm:flex-row gap-5 p-2 h-screen bg-gray-300 rounded-lg">
                    <div className="flex flex-col gap-3 sm:w-[50%]">
                        <h1 className="text-4xl font-bold">Stay on top of your tasks with our Todo App</h1>
                        <h1>Organize your life, boost your productivity, and never miss a deadline with our powerful Todo App.</h1>
                        <div className="flex items-center justify-start gap-4">
                            <button className="rounded-lg p-2 bg-black text-white hover:bg-gray-700 w-36 font-thin transition-all duration-500">Download Now</button>
                            <button className="rounded-lg p-2 border-2 border-gray-900 w-32 hover:bg-black hover:text-white transition-all duration-500">Try it Free</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={HomePageImage} className="rounded-lg sm:h-96 w-96" alt="Home Page main image for the Page" />
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center sm:w-[90%] gap-14 m-1 h-screen bg-gray-400 rounded-lg">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <h1 className="text-3xl font-bold text-center">Powerful Features to Boost Your Productivity</h1>
                        <p className="w-[50%] font-xl font-semibold text-center">Our Todo App offers a suite of features to help you stay organized and on top of your tasks.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold">Task Management</h1>
                            <p>Create, organic and prioritize your tasks with ease.</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Reminders</h1>
                            <p>Set reminders to never miss a deadline or important task.</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Collaboration</h1>
                            <p>Invite team members to collaborate on shared tasks and projects.</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Calander Integration</h1>
                            <p>Sync your tasks with your calander to stay on top of your schedule.</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Mobile Apps</h1>
                            <p>Access your tasks on the go with our iOS and Android apps.</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Reporting</h1>
                            <p>Generate reports to track your productivity and progress.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-4">
                        <button className="rounded-lg p-2 bg-black text-white hover:bg-gray-700 w-36 font-thin transition-all duration-500">Download Now</button>
                        <button className="rounded-lg p-2 border-2 border-gray-900 w-32 hover:bg-black hover:text-white transition-all duration-500">Try it Free</button>
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center sm:w-[90%] gap-2 p-3 m-1 bg-gray-300 rounded-lg">
                    <h1 className="text-3xl font-bold">Get in touch with us</h1>
                    <p>Have questions or need help? Contact our support team.</p>
                    <div className="flex items-center justify-start gap-4">
                        <button className="rounded-lg p-2 bg-black text-white hover:bg-gray-700 w-36 font-thin transition-all duration-500">Contact Us</button>
                        <button className="rounded-lg p-2 border-2 border-gray-900 w-32 hover:bg-black hover:text-white transition-all duration-500">Learn More</button>
                    </div>
                </section>
            </section>
            <Footer />
        </section>
    )
}

export default HomePage;