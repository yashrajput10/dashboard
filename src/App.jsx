import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Articles from "./components/Articles";


const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/1" element={<Articles/>} />
          <Route path="/settings" element={<div className="p-6">Settings Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
