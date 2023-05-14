import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthService from "./services/auth.service";
import Navbar from "./components/navbar/Navbar.js";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import Program from "./components/program/Program";
import Session from "./components/session/Session";
import History from './components/history/History';
import EventBus from "./common/EventBus";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    const onLogout = () => {
      logOut();
    };

    EventBus.on("logout", onLogout);

    return () => {
      EventBus.remove("logout", onLogout);
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/program" element={<Program />} />
          <Route path="/session" element={<Session />} />
          <Route path="/history" element={<History />} />
        </Routes>
        {/* </Router> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}