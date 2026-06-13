import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressRing = ({ percentage, children }) => {
    return (
        <div className="relative w-72 h-72">
            <CircularProgressbar value={percentage} />

            <div className="absolute inset-0 flex items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default ProgressRing;