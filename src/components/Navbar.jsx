import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const navigate = useNavigate();
  const [isNonMediumDevice, setIsNonMediumDevice] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsNonMediumDevice(true);
    }
  }, []);
  return (
    <header
      className={`w-full min-h-[8vh] flex justify-between items-center px-10 duration-200 ${
        isMenuOpen ? "bg-dark text-cream" : "bg-transparent text-dark"
      }`}
    >
      <Link to={"/"}>
        <div className="logo font-extrabold text-xl">onRecord</div>
      </Link>
      {isNonMediumDevice && (
        <button type="button">
          {isMenuOpen ? (
            <AiOutlineClose
              onClick={() => toggleMenu()}
              className="text-3xl cursor-pointer"
            />
          ) : (
            <FiMenu
              onClick={() => toggleMenu()}
              className="text-3xl cursor-pointer"
            />
          )}
        </button>
      )}
      {isNonMediumDevice ? (
        <nav className="absolute top-[7svh] left-0 w-full text-cream">
          <ul
            className={`nav-link-container flex justify-center py-5 bg-dark items-center flex-col gap-5 transition-all font-semibold capitalize duration-200 delay-75 ${
              isMenuOpen
                ? "h-full opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }`}
          >
            <li
              onClick={() => navigate("/")}
              className="cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              Home
            </li>
            <li
              onClick={() => navigate("/store")}
              className="cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              Recordings
            </li>
            <li
              onClick={() => navigate("about")}
              className="cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              About
            </li>
            <li
              onClick={() => navigate("contact")}
              className="cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              Contact
            </li>
            <li className="flex gap-5  w-full justify-center items-center">
              <button
                onClick={() => navigate("/register")}
                className="px-2 py-1 border-dark border-2 rounded-md hover:-translate-y-[1px] transition-transform duration-200"
              >
                Register
              </button>
              <button onClick={() => navigate("/login")}>Login</button>
            </li>
          </ul>
        </nav>
      ) : (
        <ul className="nav-link-container w-full flex justify-center items-center gap-5 font-semibold capitalize">
          <li
            onClick={() => navigate("/")}
            className="cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            Home
          </li>
          <li
            onClick={() => navigate("/store")}
            className="cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            Recordings
          </li>
          <li
            onClick={() => navigate("about")}
            className="cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            About
          </li>
          <li
            onClick={() => navigate("contact")}
            className="cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            Contact
          </li>
        </ul>
      )}
      {!isNonMediumDevice && (
        <div className="action-panel flex gap-5 font-bold">
          <button
            onClick={() => navigate("/register")}
            className="px-2 py-1 border-dark border-2 rounded-md hover:-translate-y-[1px] transition-transform duration-200"
          >
            Register
          </button>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
