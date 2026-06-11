import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";

// import Dashboard from "../pages/Dashboard";
// import Pomodoro from "../pages/Pomodoro";
// import Rooms from "../pages/Rooms";
// import Planner from "../pages/Planner";
// import Analytics from "../pages/Analytics";
// import Mentors from "../pages/Mentors";
// import Profile from "../pages/Profile";

import DashboardLayout from "../layouts/DashboardLayout";
// import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/signup" element={<Signup />} /> */}

            {/* Protected Dashboard Routes */}
            <Route
                path="/dashboard"
                element={
                    // <ProtectedRoute>
                        <DashboardLayout />
                    // </ProtectedRoute> 
                }
            >
                {/* <Route index element={<Dashboard />} />
                <Route path="pomodoro" element={<Pomodoro />} />
                <Route path="rooms" element={<Rooms />} />
                <Route path="planner" element={<Planner />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="mentors" element={<Mentors />} />
                <Route path="profile" element={<Profile />} />  */}
            </Route>

            {/* 404 Route */}
            // <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
    );
}

export default AppRoutes;