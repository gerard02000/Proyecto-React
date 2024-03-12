import React, { useState } from "react";
import { RiMenu3Fill, RiCloseLine, RiUserFill, RiUserAddFill } from "react-icons/ri"; // Importa los iconos de usuario y registro

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const closeMenuAndScroll = () => {
    setShowMenu(false);
    document.getElementById(event.target.hash).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-footer z-50 shadow-md">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <div
              className={`bg-gray-200 rounded-full p-2 mr-2 ${isHovered ? "transform scale-105" : ""
                }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img src="/cc.png" alt="Logo" className="w-12 h-12" />
            </div>
            <span className="text-lg sm:text-xl font-semibold text-white">Curtain Crafters</span>
          </a>
        </div>
        <nav className="hidden xl:flex flex-grow justify-center">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <a href="#home" className="nav-link" onClick={closeMenuAndScroll}>
              Home
            </a>
            <a href="#aboutUs" className="nav-link" onClick={closeMenuAndScroll}>
              About Us
            </a>
            <a href="#services" className="nav-link" onClick={closeMenuAndScroll}>
              Services
            </a>
            <a href="#products" className="nav-link" onClick={closeMenuAndScroll}>
              Products
            </a>
          </div>
        </nav>
        {/* Iconos de inicio de sesión y registro */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="xl:hidden text-2xl p-2 focus:outline-none focus:bg-gray-700"
          >
            {showMenu ? <RiCloseLine className="text-white" /> : <RiMenu3Fill className="text-white" />}
          </button>
          <div className="hidden xl:flex items-center text-white text-lg space-x-4">
            <a href="/login" className="nav-link">
              <RiUserFill className="mr-1" /> Login
            </a>
            <a href="/register" className="nav-link">
              <RiUserAddFill className="mr-1" /> Register
            </a>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="bg-gray-800 w-full xl:hidden">
          <div className="container mx-auto py-2 flex flex-col items-center">
            <a href="#home" className="nav-link" onClick={closeMenuAndScroll}>
              Home
            </a>
            <a href="#aboutUs" className="nav-link" onClick={closeMenuAndScroll}>
              About Us
            </a>
            <a href="#services" className="nav-link" onClick={closeMenuAndScroll}>
              Services
            </a>
            <a href="#products" className="nav-link" onClick={closeMenuAndScroll}>
              Products
            </a>
          </div>
        </div>
      )}
      <style jsx>{`
        .nav-link {
          color: rgba(255, 255, 255, 0.75);
          transition: all 0.3s ease;
          font-size: 1.1rem;
          padding: 0.5rem 1rem;
        }

        .nav-link:hover {
          color: white;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          transform: scale(1.05);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 640px) {
          .text-lg {
            font-size: 0.875rem; /* 14px */
          }
          .space-x-4 {
            margin-right: 0.5rem;
          }
        }

        @media (max-width: 768px) {
          .sm:text-xl {
            font-size: 1.25rem; /* 20px */
          }
          .space-x-4 {
            margin-right: 0.5rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
