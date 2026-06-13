import React from "react";
import MentorCard from "../components/mentors/MentorCard";

const mentors = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer",
    expertise: "DSA & System Design",
    rating: 4.9,
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Frontend Developer",
    expertise: "React & JavaScript",
    rating: 4.8,
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Aman Gupta",
    role: "Data Scientist",
    expertise: "Python & Machine Learning",
    rating: 4.7,
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "SDE-II",
    expertise: "Backend & Node.js",
    rating: 4.9,
    image: "https://i.pravatar.cc/150?img=24",
  },
];

const Mentor = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Mentor Connect
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Connect with experienced mentors and accelerate your learning journey.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

export default Mentor;