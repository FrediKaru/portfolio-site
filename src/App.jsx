import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="px-10 py-3 min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
