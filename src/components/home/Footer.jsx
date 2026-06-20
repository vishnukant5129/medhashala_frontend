const Footer = () => {
    return (
        <footer className="bg-[#071B47] text-white py-16">

            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

                <div>
                    <h1 className="text-3xl text-yellow-400 font-bold">
                        MedhaShala
                    </h1>

                    <p className="mt-4 text-gray-300">
                        Learn, collaborate and grow together.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold mb-4">
                        Platform
                    </h2>

                    <div className="space-y-3 text-gray-300">
                        <p>Pomodoro</p>
                        <p>Study Rooms</p>
                        <p>AI Planner</p>
                        <p>Mentors</p>
                    </div>
                </div>

                <div>
                    <h2 className="font-bold mb-4">
                        Support
                    </h2>

                    <div className="space-y-3 text-gray-300">
                        <p>Help Center</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>

                <div>
                    <h2 className="font-bold mb-4">
                        Newsletter
                    </h2>

                    <input
                        placeholder="Enter your email"
                        className="w-full p-3 rounded-xl text-black"
                    />
                </div>

            </div>
        </footer>
    );
};

export default Footer;