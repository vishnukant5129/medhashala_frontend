import React from "react";
import RoomList from "../components/rooms/RoomList";

const rooms = [
  {
    id: 1,
    name: "DSA Study Group",
    subject: "Data Structures & Algorithms",
    members: 24,
    online: 12,
  },
  {
    id: 2,
    name: "Web Development",
    subject: "React & Node.js",
    members: 35,
    online: 18,
  },
  {
    id: 3,
    name: "Aptitude Prep",
    subject: "Placement Preparation",
    members: 20,
    online: 8,
  },
  {
    id: 4,
    name: "DBMS Masters",
    subject: "Database Management",
    members: 15,
    online: 6,
  },
];

const Rooms = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Study Rooms
      </h1>

      <RoomList rooms={rooms} />
    </div>
  );
};

export default Rooms;