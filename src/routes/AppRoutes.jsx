import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Dashboard from "../pages/Dashboard";
import Pomodoro from "../pages/Pomodoro";
import Rooms from "../pages/Rooms";
import Planner from "../pages/Planner";
import Analytics from "../pages/Analytics";
import Mentors from "../pages/Mentors";
import Profile from "../pages/Profile";

import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
    return (
        <Routes>
            {/* Authentication Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Main Layout */}
            <Route path="/" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />

                    <Route path="pomodoro" element={<ProtectedRoute><Pomodoro /></ProtectedRoute>} />
                    <Route path="rooms" element={<ProtectedRoute><Rooms /></ProtectedRoute>} />
                    <Route path="planner" element={<ProtectedRoute><Planner /></ProtectedRoute>} />
                    <Route path="analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
                    <Route path="mentors" element={<ProtectedRoute><Mentors /></ProtectedRoute>} />
                    <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            </Route>

            {/* 404 Page */}
            <Route
                path="*"
                element={
                    <div className="h-screen flex items-center justify-center text-2xl font-bold">
                        404 - Page Not Found
                    </div>
                }
            />
        </Routes>
    );
}

export default AppRoutes;