import { Outlet } from "react-router";
import Navbar from "./components/navbar";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
