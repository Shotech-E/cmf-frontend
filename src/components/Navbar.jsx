import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed w-full bg-yellow-200 shadow-md z-50 ">
      <nav className="max-w-screen-xl mx-auto px-4 flex justify-between items-center py-2 relative h-18">
        {/* Logo - moved to left */}
        <div className="nav__logo">
          <Link to="/" onClick={closeMenu}>
            <span className="h-14 w-14 bg-gray-50 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-400 text-2xl font-semibold hover:bg-gray-400">
              CMF
            </span>
          </Link>
        </div>

        {/* Hamburger Menu - moved to right */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl focus:outline-none hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <i className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute left-0 top-full w-full bg-white shadow-md lg:static lg:flex lg:w-auto lg:bg-transparent lg:shadow-none transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "block opacity-100"
              : "hidden lg:flex opacity-0 lg:opacity-100"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 ">
            <li className="py-2 px-4 lg:py-0">
              <Link
                to="/"
                className="hover:text-gray-400 block "
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="py-2 px-4 lg:py-0">
              <Link
                to="/member"
                className="hover:text-gray-400 block"
                onClick={closeMenu}
              >
                Member
              </Link>
            </li>
            <li className="py-2 px-4 lg:py-0 ">
              <Link
                to="/add_member"
                className="hover:text-gray-400 block"
                onClick={closeMenu}
              >
                Add Member
              </Link>
            </li>
            <li className="py-2 px-4 lg:py-0">
              <Link
                to="/priests"
                className="hover:text-gray-400 block"
                onClick={closeMenu}
              >
                Priests
              </Link>
            </li>
            <li className="py-2 px-4 lg:py-0">
              <Link
                to="/about_us"
                className="hover:text-gray-400 block"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li className="py-2 px-4 lg:py-0">
              <Link
                to="/contact"
                className="hover:text-gray-400 block"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
