import { features } from "./features";

const Features = () => {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-8">

                <h1 className="text-5xl font-bold text-center">
                    Everything You Need To Succeed
                </h1>

                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="shadow-lg rounded-3xl p-6 hover:scale-105 duration-300"
                        >

                            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center text-2xl">
                                🚀
                            </div>

                            <h2 className="font-bold mt-5">
                                {item.title}
                            </h2>

                            <p className="text-gray-500 mt-3">
                                {item.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Features;