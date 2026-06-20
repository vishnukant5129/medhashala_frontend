const HeroSection = () => {
    return (
        <section className="bg-[#071B47] text-white min-h-screen flex items-center">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-8">

                <div>
                    <h1 className="text-6xl font-bold">
                        Learn Smarter.
                        <br />
                        <span className="text-yellow-400">
                            Achieve More.
                        </span>
                    </h1>

                    <p className="mt-8 text-gray-300 text-lg">
                        MedhaShala is your all-in-one platform for focused learning,
                        real-time collaboration, mentorship and personal growth.
                    </p>

                    <div className="flex gap-5 mt-10">
                        <button className="bg-yellow-400 px-8 py-4 rounded-xl text-black font-bold">
                            Get Started
                        </button>

                        <button className="border border-yellow-400 px-8 py-4 rounded-xl">
                            Explore Features
                        </button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src="/student.png"
                        className="w-[500px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;