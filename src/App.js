import "./App.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/pages/Profile/Profile";
import Home from "./components/pages/home/Home.jsx";

function App() {
  const pepe = useSelector((state) => state.profile);

  useEffect(() => {
    console.log(pepe);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={() => <Home />} />
        <Route path="/profile/:user" Component={() => <Profile />} />
        <Route path="/search/:searchQuery" Component={() => <></>} />
        <Route path="/jobs" Component={() => <></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
