import { useState } from "react";
import { FaTasks, FaFlag, FaPlus } from "react-icons/fa";

const DailyTaskForm = () => {
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!task.trim()) return;

        const newTask = {
            id: Date.now(),
            title: task,
            priority,
            completed: false,
            createdAt: new Date().toISOString(),
        };

        const oldTasks =
            JSON.parse(localStorage.getItem("daily_tasks")) || [];

        localStorage.setItem(
            "daily_tasks",
            JSON.stringify([newTask, ...oldTasks])
        );

        setTask("");
        setPriority("Medium");

        setSuccess(true);

        setTimeout(() => {
            setSuccess(false);
        }, 2000);
    };

    return (
        <div className="max-w-3xl mx-auto">
            <form
                onSubmit={handleSubmit}
                className="
          bg-white
          p-8
          rounded-3xl
          border border-[#E2E8F0]
          shadow-sm
          hover:shadow-lg
          transition-all duration-300
        "
            >
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div
                        className="
              w-14 h-14
              rounded-2xl
              bg-[#F4B400]/15
              flex items-center justify-center
            "
                    >
                        <FaTasks className="text-[#F4B400] text-xl" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-[#0B1F3A]">
                            Add Daily Task
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Plan your day and stay productive
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Task Input */}
                    <div>
                        <label className="block text-[#1E293B] font-medium mb-2">
                            Task Name
                        </label>

                        <input
                            type="text"
                            placeholder="Ex: Solve 2 Leetcode Problems"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            className="
                w-full
                p-4
                rounded-2xl
                border border-[#E2E8F0]
                outline-none
                focus:ring-2
                focus:ring-[#F4B400]
                transition
              "
                        />
                    </div>

                    {/* Priority */}
                    <div>
                        <label className="block text-[#1E293B] font-medium mb-2">
                            Priority
                        </label>

                        <div className="relative">
                            <FaFlag className="absolute left-4 top-5 text-gray-400" />

                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                className="
                  w-full
                  p-4
                  pl-12
                  rounded-2xl
                  border border-[#E2E8F0]
                  outline-none
                  focus:ring-2
                  focus:ring-[#F4B400]
                  appearance-none
                "
                            >
                                <option value="High">🔥 High</option>
                                <option value="Medium">⚡ Medium</option>
                                <option value="Low">🌿 Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Success Message */}
                    {success && (
                        <div
                            className="
                bg-green-50
                text-green-700
                border border-green-200
                rounded-2xl
                p-4
                text-sm
                font-medium
              "
                        >
                            ✅ Task added successfully
                        </div>
                    )}

                    {/* Button */}
                    <button
                        type="submit"
                        className="
              w-full
              py-4
              rounded-2xl
              bg-[#F4B400]
              text-[#0B1F3A]
              font-bold
              flex
              items-center
              justify-center
              gap-3
              hover:scale-[1.02]
              hover:shadow-lg
              transition-all duration-300
            "
                    >
                        <FaPlus />
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DailyTaskForm;