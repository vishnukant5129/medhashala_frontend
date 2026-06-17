import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressRing = ({ percentage, children }) => {
  return (
    <div className="relative w-72 h-72">
      <CircularProgressbar
        value={percentage}
        styles={{
          path: {
            stroke: "#F4B400",
            strokeLinecap: "round",
          },
          trail: {
            stroke: "#E2E8F0",
          },
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default ProgressRing;