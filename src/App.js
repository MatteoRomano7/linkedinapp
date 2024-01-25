import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/pages/Profile/Profile";
import Home from "./components/pages/home/Home.jsx";
import Jobs from "./components/pages/Jobs/Jobs.jsx";
import MyFooter from "./components/MyFooter/MyFooter.jsx";
import LoginPage from "./components/pages/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="global-wrapper">
        <Navbar />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:user" element={<Profile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:searchQuery" element={<Jobs />} />
        </Routes>

        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
