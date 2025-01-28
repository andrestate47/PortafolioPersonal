import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import AboutMe from "./Pages/AboutMe";
import Portfolio from "./Pages/Portfolio";
import Store from "./Pages/Store"; // Tienda
import Cart from "./components/Cart";
import Blog from "./Pages/Blog"
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import "./styles/App.css";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false); // Modo oscuro
  const [cart, setCart] = useState([]); // Estado para el carrito

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Función para alternar el modo oscuro
  };

  return (
    <Router>
      <div className={`app ${darkMode ? "dark-mode" : ""}`}>
        {/* Navbar pasa el estado de modo oscuro */}
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className="content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/store"
              element={<Store cart={cart} setCart={setCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route path="/Blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
