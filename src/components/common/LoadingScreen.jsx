import { COLORS } from "../../constants/theme";
import Logo from "../../assets/Medhashala.jpeg";

function LoadingScreen() {
    return (
        <div
            className="fixed inset-0 overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: COLORS.background }}
        >
            {/* Animated Background */}

            <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-yellow-300/20 blur-[100px] float-slow" />

            <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px] float-medium" />

            <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-yellow-400/10 blur-[100px] float-fast -translate-x-1/2 -translate-y-1/2" />

            {/* Gradient Overlay */}

            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white" />

            {/* Main Content */}

            <div className="relative z-10 flex flex-col items-center px-6">

                {/* Logo */}

                <div className="w-32 h-32 rounded-4xl bg-white shadow-2xl flex items-center justify-center">

                    <img
                        src={Logo}
                        alt="Medhashala Logo"
                        className="w-24 h-24 object-contain rounded-2xl"
                    />

                </div>

                {/* Title */}

                <h1
                    className="mt-7 text-5xl font-bold tracking-wide"
                    style={{ color: COLORS.primary }}
                >
                    Medha
                    <span style={{ color: COLORS.accent }}>
                        shala
                    </span>
                </h1>

                <p className="mt-2 text-slate-500 text-sm">
                    Learn • Focus • Grow
                </p>

                {/* Spinner */}

                <div
                    className="mt-10 w-14 h-14 rounded-full border-4 animate-spin"
                    style={{
                        borderColor: COLORS.border,
                        borderTopColor: COLORS.accent,
                    }}
                />

                {/* Loading Text */}

                <p
                    className="mt-6 font-medium animate-pulse"
                    style={{ color: COLORS.text }}
                >
                    Preparing your workspace...
                </p>

                <p className="mt-2 text-xs text-slate-400">
                    Please wait a moment
                </p>
            </div>

            {/* Footer */}

            <div className="absolute bottom-8 text-xs text-slate-400">
                Medhashala v1.0
            </div>
        </div>
    );
}

export default LoadingScreen;