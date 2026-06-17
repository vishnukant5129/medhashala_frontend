import { useState } from "react";

const TaskCard = ({ task, onComplete }) => {
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    setCompleted(!completed);
    onComplete(completed);
  };

  return (
    <div
      className={`
        flex items-center justify-between
        p-4
        rounded-2xl
        border
        transition-all duration-300
        cursor-pointer

        ${
          completed
            ? "bg-[#F4B400]/10 border-[#F4B400]"
            : "bg-white border-[#E2E8F0] hover:border-[#F4B400] hover:shadow-md"
        }
      `}
    >
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleClick}
          className="
            w-5 h-5
            accent-[#F4B400]
            cursor-pointer
          "
        />

        <span
          className={`
            font-medium transition-all
            ${
              completed
                ? "text-gray-400 line-through"
                : "text-[#0B1F3A]"
            }
          `}
        >
          {task}
        </span>
      </div>

      {completed && (
        <span
          className="
            px-3 py-1
            rounded-full
            bg-[#F4B400]
            text-[#0B1F3A]
            text-xs
            font-semibold
          "
        >
          Done
        </span>
      )}
    </div>
  );
};

export default TaskCard;