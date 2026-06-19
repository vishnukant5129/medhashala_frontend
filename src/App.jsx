import { useEffect, useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import LoadingScreen from "./components/common/LoadingScreen";
// import { Toaster } from "react-hot-toast";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      {/* <Toaster position="top-right" /> */}
      <AppRoutes />
    </>
  );
}

export default App;