import React from "react";

const WeeklySummary = ({ data }) => {
    return (
        <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="font-semibold text-xl mb-4">
                Weekly Summary
            </h2>

            {data.map((item) => (
                <div
                    key={item.day}
                    className="flex justify-between py-2 border-b"
                >
                    <span>{item.day}</span>

                    <span>
                        {item.completed} Tasks
                    </span>
                </div>
            ))}
        </div>
    );
};

export default WeeklySummary;