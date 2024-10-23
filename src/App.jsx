import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="px-10 py-5 min-h-screen flex flex-col gap-4">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
