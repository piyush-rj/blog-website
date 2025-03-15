import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu

const Navbar = () => {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("token");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        if (isLoggedIn) {
            navigate("/blogs");
        } else {
            navigate("/signin");
        }
    };

    return (
        <div className="bg-black h-16 w-full flex justify-between items-center border-b border-gray-400 fixed z-50 backdrop-blur-3xl px-6 lg:px-10">
            {/* Left Side - Logo */}
            <div className="text-white text-2xl font-semibold tracking-wide">
                <Link to={"/"}>ByteWords</Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6 items-center text-white">
                <div onClick={handleClick} className="cursor-pointer hover:text-gray-300">
                    <Link to={"/blogs"}>Blogs</Link>
                </div>
                <div onClick={handleClick} className="cursor-pointer hover:text-gray-300">
                    Write
                </div>
                <Link to={"/signup"}>
                    <Button text="Signup" />
                </Link>
                <Link to={"/signin"}>
                    <Button text="Signin" />
                </Link>
            </div>

            
        </div>
    );
};

export default Navbar;