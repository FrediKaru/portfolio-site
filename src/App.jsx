import "./App.css";
import Navbar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="px-10 py-3">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
