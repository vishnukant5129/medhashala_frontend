import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GraduationCap } from "lucide-react";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token && token !== "null" && token !== "undefined") {
            navigate(from, { replace: true });
        }
    }, [navigate, from]);

    const handleLogin = async (e) => {
        console.log('jskjdkjdkjf')
        e.preventDefault();

        setError("");

        if (!email.trim() || !password.trim()) {
            setError("Please fill all fields.");
            return;
        }

        try {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));

            localStorage.setItem("token", "123");

            navigate(from, { replace: true });
        } catch (err) {
            setError("Invalid credentials");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-white border border-[#E2E8F0] rounded-3xl shadow-xl p-8">

                {/* Logo */}
                <div className="flex flex-col items-center mb-8">

                    <div className="bg-[#0B1F3A] p-4 rounded-2xl">
                        <GraduationCap
                            size={32}
                            className="text-[#F4B400]"
                        />
                    </div>

                    <h1 className="mt-4 text-3xl font-bold text-[#0B1F3A]">
                        Medhashala
                    </h1>

                    <p className="text-sm text-slate-500 mt-2 text-center">
                        Welcome back to your learning journey
                    </p>

                </div>

                {/* Error */}
                {error && (
                    <div className="bg-red-50 text-red-600 border border-red-200 rounded-xl px-4 py-3 mb-5 text-sm">
                        {error}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-[#1E293B]">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="
                            w-full
                            border border-[#E2E8F0]
                            rounded-xl
                            px-4 py-3
                            outline-none
                            focus:ring-2
                            focus:ring-[#F4B400]
                            "
                        />
                    </div>

                    {/* Password */}
                    <div>

                        <label className="block mb-2 text-sm font-medium text-[#1E293B]">
                            Password
                        </label>

                        <div className="relative">

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                className="
                                w-full
                                border border-[#E2E8F0]
                                rounded-xl
                                px-4 py-3
                                pr-12
                                outline-none
                                focus:ring-2
                                focus:ring-[#F4B400]
                                "
                            />

                            <button
                                type="button"
                                className="
                                absolute
                                right-4
                                top-1/2
                                -translate-y-1/2
                                text-gray-500
                                "
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >
                                {showPassword ? (
                                    <FaEyeSlash size={18} />
                                ) : (
                                    <FaEye size={18} />
                                )}
                            </button>

                        </div>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center justify-between">

                        <label className="flex items-center gap-2 text-sm text-slate-600">

                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() =>
                                    setRememberMe(!rememberMe)
                                }
                            />

                            Remember me

                        </label>

                        <Link
                            to="/forgot-password"
                            className="text-[#F4B400] font-medium hover:underline"
                        >
                            Forgot Password?
                        </Link>

                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="
                        w-full
                        bg-[#F4B400]
                        text-[#0B1F3A]
                        py-3
                        rounded-xl
                        font-bold
                        shadow-md
                        hover:scale-[1.02]
                        transition-all
                        disabled:opacity-60
                        "
                    >
                        {/* {loading ? "Signing In..." : "Login"} */}
                        Login
                    </button>

                </form>

                {/* Footer */}
                <div className="mt-8 text-center text-sm text-[#1E293B]">

                    Don't have an account?{" "}

                    <Link
                        to="/signup"
                        className="text-[#F4B400] font-semibold hover:underline"
                    >
                        Sign Up
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default Login;