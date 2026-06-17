import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

const TimerControls = ({ isRunning, onStart, onPause, onReset }) => {
    return (
        <div className="flex gap-5 justify-center">
            {isRunning ? (
                <button
                    onClick={onPause}
                    className="
            w-14 h-14
            rounded-2xl
            bg-[#F4B400]
            text-[#0B1F3A]
            flex items-center justify-center
            text-xl
            hover:scale-105
            transition
          "
                >
                    <FaPause />
                </button>
            ) : (
                <button
                    onClick={onStart}
                    className="
            w-14 h-14
            rounded-2xl
            bg-[#F4B400]
            text-[#0B1F3A]
            flex items-center justify-center
            text-xl
            hover:scale-105
            transition
          "
                >
                    <FaPlay />
                </button>
            )}

            <button
                onClick={onReset}
                className="
          w-14 h-14
          rounded-2xl
          bg-white
          border border-[#E2E8F0]
          text-[#0B1F3A]
          flex items-center justify-center
          hover:border-[#F4B400]
          transition
        "
            >
                <FaRedo />
            </button>
        </div>
    );
};

export default TimerControls;