// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import AboutMe from "./Pages/AboutMe"; 
import Portfolio from "./Pages/Portfolio";
import "./styles/App.css";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <Router>
      <div className={`app ${darkMode ? "dark-mode" : ""}`}>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className="content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about-me" element={<AboutMe />} /> 
            <Route path="/Portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
