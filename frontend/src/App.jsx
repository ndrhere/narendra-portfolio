import React from "react";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import PortfolioFormPage from "./pages/PortfolioFormPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./store/useThemeStore.js";
import AdminLogin from "./pages/AdminLogin.jsx";

const App = () => {
  const { theme } = useThemeStore();
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  return (
    <div className=" min-h-screen" data-theme={theme}>
      <Navbar />
      <main className={isHomePage ? "" : "pt-20 bg-base-200"}>
        <Routes>
          
          <Route path="/admin/login" element={<AdminLogin/>}></Route>

          <Route path="/" element={<HomePage />}></Route>
          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="/portfolio/add" element={<PortfolioFormPage />}></Route>
          <Route
            path="/portfolio/edit/:id"
            element={<PortfolioFormPage />}
          ></Route>
          <Route path="/portfolio" element={<PortfolioPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </main>
      <Toaster />
    </div>
  );
};

export default App;
