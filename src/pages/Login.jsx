import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GraduationCap } from "lucide-react";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && token !== "null" && token !== "undefined") {
            navigate(from, { replace: true });
        }
    }, [navigate, from]);

    const handleLogin = (e) => {
        e.preventDefault();

        // Temporary token-based login until backend is available
        localStorage.setItem("token", "123");

        navigate(from, { replace: true });
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white border border-[#E2E8F0] rounded-2xl shadow-lg p-8">

                {/* Logo */}
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-[#0B1F3A] p-3 rounded-xl">
                        <GraduationCap size={28} className="text-[#F4B400]" />
                    </div>

                    <h1 className="mt-4 text-3xl font-bold text-[#0B1F3A]">
                        Medhashala
                    </h1>

                    <p className="text-sm text-[#1E293B] mt-2">
                        Welcome back to your learning journey
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4B400]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-2">
                            Password
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4B400]"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-4 text-gray-500"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <Link
                            to="/forgot-password"
                            className="text-[#F4B400] font-medium"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#0B1F3A] text-white py-3 rounded-xl font-semibold hover:opacity-95 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-[#1E293B] mt-6">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-[#F4B400] font-semibold"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;