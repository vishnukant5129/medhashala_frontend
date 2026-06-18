import { FaCheckSquare, FaRegSquare, FaTrash } from "react-icons/fa";

const priorityStyles = {
  High: {
    bg: "bg-red-100",
    text: "text-red-600",
  },
  Medium: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
  },
  Low: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
};

const TaskCard = ({ task, onComplete, onDelete }) => {
  const style =
    priorityStyles[task.priority] || priorityStyles.Medium;

  return (
    <div
      className="
      bg-white
      border border-[#E2E8F0]
      rounded-3xl
      p-5
      shadow-sm
      hover:shadow-md
      hover:-translate-y-1
      transition-all duration-300
    "
    >
      <div className="flex justify-between items-start gap-4">

        {/* Left */}
        <div className="flex items-start gap-4 flex-1">

          {/* Complete Button */}
          <button
            onClick={onComplete}
            className="
    transition-all
    duration-300
    hover:scale-110
  "
          >
            {task.completed ? (
              <FaCheckSquare className="text-2xl text-green-500" />
            ) : (
              <FaRegSquare className="text-2xl text-gray-300 hover:text-green-400" />
            )}
          </button>

          {/* Task Info */}
          <div className="flex-1">

            <h3
              className={`
                text-lg font-semibold
                transition-all
                ${task.completed
                  ? "line-through text-gray-400"
                  : "text-[#0B1F3A]"
                }
              `}
            >
              {task.title}
            </h3>

            <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
              {/* <FaCalendarAlt className="text-xs" /> */}

              <span>
                {/* {new Date(task.createdAt).toLocaleDateString()} */}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">

          {/* Priority Badge */}
          <div
            className={`
      px-3 py-1.5
      rounded-full
      text-sm
      font-medium
      ${style.bg}
      ${style.text}
    `}
          >
            {task.priority}
          </div>

          {/* Delete Button */}
          <button
            onClick={() => {
              const confirmDelete = window.confirm(
                "Are you sure you want to delete this task?"
              );

              if (confirmDelete) {
                onDelete(task.id);
              }
            }}
            className="
    w-10 h-10
    rounded-xl
    bg-red-50
    text-red-500
    flex items-center justify-center
    hover:bg-red-100
    transition-all duration-300
  "
          >
            <FaTrash />
          </button>

        </div>

      </div>
    </div>
  );
};

export default TaskCard;