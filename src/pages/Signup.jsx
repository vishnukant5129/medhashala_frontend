import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GraduationCap } from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-[#E2E8F0] rounded-2xl shadow-lg p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-[#0B1F3A] p-3 rounded-xl">
            <GraduationCap size={28} className="text-[#F4B400]" />
          </div>

          <h1 className="mt-4 text-3xl font-bold text-[#0B1F3A]">
            Create Account
          </h1>

          <p className="text-sm text-[#1E293B] mt-2">
            Start your productivity journey
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#1E293B] mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F4B400]"
            />
          </div>

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
                placeholder="Create password"
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

          <button
            className="w-full bg-[#F4B400] text-[#0B1F3A] py-3 rounded-xl font-bold hover:opacity-95 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-[#1E293B] mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#F4B400] font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;