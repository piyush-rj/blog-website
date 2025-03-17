import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Blog } from "../hooks";

const Appbar = ({ blog }: { blog?: Blog }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      {/* Overlay (Blurs Background when Menu is Open) */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"
          onClick={() => setIsMenuOpen(false)} // Clicking outside the menu closes it
        />
      )}

      <div className="fixed w-full bg-black border-b border-gray-400 backdrop-blur-3xl z-50">
        <div className="h-14 flex items-center justify-between px-4 md:px-10">
          {/* Logo */}
          <div className="text-white text-xl md:text-2xl font-semibold tracking-wide">
            <Link to={"/blogs"}>ByteWords</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to={"/blogs"} className="text-white hover:text-gray-300">
              Blogs
            </Link>
            <Link to={"/publish"} className="text-white hover:text-gray-300">
              Write
            </Link>
            <button
              onClick={handleLogout}
              className="bg-[#d21a1a] hover:bg-red-800 px-4 py-1.5 rounded text-white"
            >
              Logout
            </button>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-2xl"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`fixed top-14 left-0 w-full bg-black border-t border-gray-700 md:hidden py-3 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <Link
            to={"/blogs"}
            className="block text-white py-2 hover:text-gray-300 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </Link>
          <Link
            to={"/publish"}
            className="block text-white py-2 hover:text-gray-300 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Write
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setIsMenuOpen(false);
            }}
            className="block bg-[#d21a1a] hover:bg-red-800 px-4 py-1.5 rounded text-white mx-auto mt-2"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Appbar;
