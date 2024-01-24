import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/pages/Profile/Profile";
import Home from "./components/pages/home/Home.jsx";
import MyFooter from "./components/MyFooter/MyFooter.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="global-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" Component={() => <Home />} />
          <Route path="/profile/:user" Component={() => <Profile />} />
          <Route path="/search/:searchQuery" Component={() => <></>} />
          <Route path="/jobs" Component={() => <></>} />
        </Routes>
        <MyFooter />
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
