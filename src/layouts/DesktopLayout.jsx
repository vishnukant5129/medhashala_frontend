import useDevice from "../hooks/useDevice";

import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

function DashboardLayout() {

    const isMobile = useDevice();

    return isMobile
        ? <MobileLayout />
        : <DesktopLayout />;
}

export default DashboardLayout;