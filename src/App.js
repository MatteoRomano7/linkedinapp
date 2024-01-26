import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyFooter from "./components/MyFooter/MyFooter.jsx";
import Home from "./components/pages/home/Home.jsx";
import Profile from "./components/pages/Profile/Profile.jsx";
import Jobs from "./components/pages/Jobs/Jobs.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="global-wrapper">
        <Routes>
          {/* <Route path="/login" Component={() => } /> */}
          <Route
            path="/"
            Component={() => (
              <>
                <Navbar />
                <Home />
              </>
            )}
          />
          <Route
            path="/profile/:user"
            Component={() => (
              <>
                <Navbar />
                <Profile />
              </>
            )}
          />
          <Route
            path="/jobs"
            Component={() => (
              <>
                <Navbar />
                <Jobs />
              </>
            )}
          />
          <Route
            path="/jobs/:searchQuery"
            Component={() => (
              <>
                <Navbar />
                <Jobs />
              </>
            )}
          />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
