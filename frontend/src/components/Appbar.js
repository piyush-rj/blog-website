import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Appbar = ({ blog }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
    return (_jsxs(_Fragment, { children: [isMenuOpen && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40", onClick: () => setIsMenuOpen(false) })), _jsxs("div", { className: "fixed w-full bg-black border-b border-gray-400 backdrop-blur-3xl z-50", children: [_jsxs("div", { className: "h-14 flex items-center justify-between px-4 md:px-10", children: [_jsx("div", { className: "text-white text-xl md:text-2xl font-semibold tracking-wide", children: _jsx(Link, { to: "/blogs", children: "ByteWords" }) }), _jsxs("div", { className: "hidden md:flex items-center gap-6", children: [_jsx(Link, { to: "/blogs", className: "text-white hover:text-gray-300", children: "Blogs" }), _jsx(Link, { to: "/publish", className: "text-white hover:text-gray-300", children: "Write" }), _jsx("button", { onClick: handleLogout, className: "bg-[#d21a1a] hover:bg-red-800 px-4 py-1.5 rounded text-white", children: "Logout" })] }), _jsx("div", { className: "md:hidden z-50", children: _jsx("button", { onClick: () => setIsMenuOpen(!isMenuOpen), className: "text-white text-2xl", children: isMenuOpen ? "✕" : "☰" }) })] }), _jsxs("div", { className: `fixed top-14 left-0 w-full bg-black border-t border-gray-700 md:hidden py-3 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`, children: [_jsx(Link, { to: "/blogs", className: "block text-white py-2 hover:text-gray-300 text-center", onClick: () => setIsMenuOpen(false), children: "Blogs" }), _jsx(Link, { to: "/publish", className: "block text-white py-2 hover:text-gray-300 text-center", onClick: () => setIsMenuOpen(false), children: "Write" }), _jsx("button", { onClick: () => {
                                    handleLogout();
                                    setIsMenuOpen(false);
                                }, className: "block bg-[#d21a1a] hover:bg-red-800 px-4 py-1.5 rounded text-white mx-auto mt-2", children: "Logout" })] })] })] }));
};
export default Appbar;
