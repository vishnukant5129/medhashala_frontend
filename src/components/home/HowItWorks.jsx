const steps = [
    "Sign Up",
    "Explore",
    "Focus & Learn",
    "Achieve Goals"
];

const HowItWorks = () => {
    return (
        <section className="py-20">

            <h1 className="text-center text-5xl font-bold">
                How MedhaShala Works
            </h1>

            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mt-20">

                {steps.map((item, index) => (
                    <div
                        key={index}
                        className="text-center"
                    >
                        <div className="w-20 h-20 rounded-full bg-yellow-400 mx-auto flex items-center justify-center text-3xl">
                            {index + 1}
                        </div>

                        <h2 className="font-bold text-2xl mt-6">
                            {item}
                        </h2>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default HowItWorks;