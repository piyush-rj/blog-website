import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        }
        else {
            navigate("/signin");
        }
    };
    return (_jsxs("div", { className: "bg-black h-16 w-full flex justify-between items-center border-b border-gray-400 fixed z-50 backdrop-blur-3xl px-6 lg:px-10", children: [_jsx("div", { className: "text-white text-2xl font-semibold tracking-wide", children: _jsx(Link, { to: "/", children: "ByteWords" }) }), _jsxs("div", { className: "hidden lg:flex space-x-6 items-center text-white", children: [_jsx("div", { onClick: handleClick, className: "cursor-pointer hover:text-gray-300", children: _jsx(Link, { to: "/blogs", children: "Blogs" }) }), _jsx("div", { onClick: handleClick, className: "cursor-pointer hover:text-gray-300", children: "Write" }), _jsx(Link, { to: "/signup", children: _jsx(Button, { text: "Signup" }) }), _jsx(Link, { to: "/signin", children: _jsx(Button, { text: "Signin" }) })] }), _jsx("button", { className: "lg:hidden text-white text-2xl", onClick: () => setMenuOpen(!menuOpen), children: menuOpen ? _jsx(FiX, {}) : _jsx(FiMenu, {}) }), menuOpen && (_jsxs("div", { className: "absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 border-b border-gray-400 lg:hidden", children: [_jsx("div", { onClick: handleClick, className: "cursor-pointer hover:text-gray-300", children: _jsx(Link, { to: "/blogs", children: "Blogs" }) }), _jsx("div", { onClick: handleClick, className: "cursor-pointer hover:text-gray-300", children: "Write" }), _jsx(Link, { to: "/signup", children: _jsx(Button, { text: "Signup" }) }), _jsx(Link, { to: "/signin", children: _jsx(Button, { text: "Signin" }) })] }))] }));
};
export default Navbar;
