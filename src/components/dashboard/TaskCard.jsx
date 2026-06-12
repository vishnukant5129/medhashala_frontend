import { useState } from "react";

const TaskCard = ({ task, onComplete }) => {

  const [completed, setCompleted] = useState(false);

  const handleClick = () => {

      setCompleted(!completed);
      onComplete(completed); // Dashboard ka state update hoga
    
  };
  return (
    <div className="p-3 flex items-center justify-between rounded-lg bg-gray-100 hover:bg-blue-50 hover:translate-x-2 transition-all duration-300 cursor-pointer group">
      {/* Task Text */}
      <span
        className="text-gray-700 font-medium group-hover:text-blue-900 transition-colors"
        onClick={handleClick}
      >
        {task}
      </span>

      {/* Checkbox Container */}
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleClick}
          className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TaskCard;