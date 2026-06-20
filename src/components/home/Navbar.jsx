import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-[#071B47] text-white px-8 py-5 flex justify-between items-center">

            <h1 className="text-3xl font-bold text-yellow-400">
                MedhaShala
            </h1>
            
            <div className="flex gap-4">
                <Link
                    to="/login"
                    className="border border-yellow-400 px-5 py-2 rounded-xl"
                >
                    Login
                </Link>

                <Link
                    to="/signup"
                    className="bg-yellow-400 px-5 py-2 rounded-xl text-black font-semibold"
                >
                    Sign Up
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;