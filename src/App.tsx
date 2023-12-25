import "./App.css";
import Home from "./components/Home";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen font-sans">
      <NavBar />
      <div className="w-full mx-auto bg-white  rounded-xl">
        <Home/>
      </div>
    </div>
  );
}

export default App;
