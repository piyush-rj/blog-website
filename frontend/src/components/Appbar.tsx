import { Link, useNavigate } from "react-router-dom";
import { Blog } from "../hooks";

const Appbar = ({ blog }: { blog?: Blog }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="fixed w-full bg-black border-b border-gray-400 backdrop-blur-3xl z-50">
      <div className="h-14 flex items-center justify-between px-4 md:px-10">
        {/* Logo */}
        <div className="text-white text-xl md:text-2xl font-semibold tracking-wide">
          <Link to={"/blogs"}>ByteWords</Link>
        </div>

        {/* Navigation Links */}
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

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button
            onClick={() => {
              document.getElementById("mobile-menu")?.classList.toggle("hidden");
            }}
            className="text-white text-xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-menu"
        className="visibility-hidden flex flex-col items-center bg-black border-t border-gray-700 md:hidden py-3"
      >
        <Link to={"/blogs"} className="text-white py-2 hover:text-gray-300">
          Blogs
        </Link>
        <Link to={"/publish"} className="text-white py-2 hover:text-gray-300">
          Write
        </Link>
        <button
          onClick={handleLogout}
          className="bg-[#d21a1a] hover:bg-red-800 px-4 py-1.5 rounded text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Appbar;
