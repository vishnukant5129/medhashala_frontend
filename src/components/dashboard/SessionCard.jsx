import React from "react";

const SessionCard = ({ title, duration, date }) => {
  return (
    <div className="border-b last:border-b-0 pb-3">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-500">
        {duration} • {date}
      </p>
    </div>
  );
};

export default SessionCard;