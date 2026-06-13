import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

const TimerControls = ({
    isRunning,
    onStart,
    onPause,
    onReset,
}) => {
    return (
        <div className="flex gap-4 justify-center">
            {isRunning ? (
                <button
                    onClick={onPause}
                    className="bg-yellow-500 px-5 py-3 rounded-lg text-white"
                >
                    <FaPause />
                </button>
            ) : (
                <button
                    onClick={onStart}
                    className="bg-green-500 px-5 py-3 rounded-lg text-white"
                >
                    <FaPlay />
                </button>
            )}

            <button
                onClick={onReset}
                className="bg-red-500 px-5 py-3 rounded-lg text-white"
            >
                <FaRedo />
            </button>
        </div>
    );
};

export default TimerControls;