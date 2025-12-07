import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ThemeSelector from "./ThemeSelector.jsx";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [open, setOpen] = useState(false);

  const navClass = (path) =>
    `${
      currentPath === path ? "text-cyan-400 font-semibold" : "text-white"
    } hover:text-cyan-300`;

  return (
    <div className="navbar px-6 py-4 fixed top-0 left-0 w-full bg-transparent z-50 flex items-center justify-between">
      {/* LEFT SIDE */}
      <div className="text-center sm:text-left sm:ml-12">
        <h1 className="text-2xl font-bold cursor-pointer text-white">
          Narendra.
        </h1>
      </div>

      {/* RIGHT MENU */}
      <div className="hidden sm:flex flex-col sm:flex-row gap-3 sm:gap-6 text-lg font-medium items-center">
        <Link
          to="/"
          className={`${
            currentPath === "/" ? "text-cyan-400 font-semibold" : "text-white"
          } hover:text-cyan-300`}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={`${
            currentPath === "/about"
              ? "text-cyan-400 font-semibold"
              : "text-white"
          } hover:text-cyan-300`}
        >
          About
        </Link>

        <Link
          to="/services"
          className={`${
            currentPath === "/services"
              ? "text-cyan-400 font-semibold"
              : "text-white"
          } hover:text-cyan-300`}
        >
          Services
        </Link>

        <Link
          to="/portfolio"
          className={`${
            currentPath === "/portfolio"
              ? "text-cyan-400 font-semibold"
              : "text-white"
          } hover:text-cyan-300`}
        >
          Portfolio
        </Link>

        <Link
          to="/contact"
          className={`${
            currentPath === "/contact"
              ? "text-cyan-400 font-semibold"
              : "text-white"
          } hover:text-cyan-300`}
        >
          Contact
        </Link>

        <ThemeSelector />
      </div>

      {/* MOBILE HAMBURGER - RIGHT SIDE */}
      <button className="sm:hidden text-white" onClick={() => setOpen(!open)}>
        {open ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="absolute top-full right-6 mt-3 bg-black/90 backdrop-blur-md p-5 rounded-xl flex flex-col gap-4 text-lg font-medium sm:hidden">
          <Link onClick={() => setOpen(false)} to="/" className={navClass("/")}>
            Home
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/about"
            className={navClass("/about")}
          >
            About
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/services"
            className={navClass("/services")}
          >
            Services
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/portfolio"
            className={navClass("/portfolio")}
          >
            Portfolio
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/contact"
            className={navClass("/contact")}
          >
            Contact
          </Link>

          <ThemeSelector />
        </div>
      )}
    </div>
  );
};

export default Navbar;
