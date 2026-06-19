import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
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
import HomeLayout from "../layouts/HomeLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";

function AppRoutes() {
    return (
        <Routes>

            {/* Public Pages */}
            <Route element={<HomeLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Route>

            {/* Protected Pages */}
            <Route element={<ProtectedLayout />}>
                <Route path="/dashboard" element={<DashboardLayout />}>

                    <Route index element={<Dashboard />} />

                    <Route path="pomodoro" element={<Pomodoro />} />
                    <Route path="rooms" element={<Rooms />} />
                    <Route path="planner" element={<Planner />} />
                    <Route path="analytics" element={<Analytics />} />
                    <Route path="mentors" element={<Mentors />} />
                    <Route path="profile" element={<Profile />} />

                </Route>
            </Route>

            <Route
                path="*"
                element={
                    <div className="h-screen flex items-center justify-center text-2xl">
                        404 Page Not Found
                    </div>
                }
            />
        </Routes>
    );
}

export default AppRoutes;