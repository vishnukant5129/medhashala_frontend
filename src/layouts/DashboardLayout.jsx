import { Outlet } from "react-router-dom";

import Sidebar from "../components/desktop/Sidebar.jsx";
import Navbar from "../components/desktop/Navbar.jsx";

import MobileHeader from "../components/mobile/MobileHeader";
import BottomNav from "../components/mobile/BottomNav";

function DashboardLayout() {
  return (
    <div className="h-screen flex overflow-hidden">

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col bg-slate-100">

        {/* Desktop Navbar */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden">
          <MobileHeader />
        </div>

        <main className="flex-1 overflow-y-auto pb-20 lg:pb-0">
          <Outlet />
        </main>

        {/* Mobile Bottom Navigation */}
        <div className="lg:hidden">
          <BottomNav />
        </div>

      </div>
    </div>
  );
}

export default DashboardLayout;