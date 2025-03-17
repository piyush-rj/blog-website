import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
const Appbar = ({ blog }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
    return (_jsxs("div", { className: "fixed w-full bg-black border-b border-gray-400 backdrop-blur-3xl z-50", children: [_jsxs("div", { className: "h-14 flex items-center justify-between px-4 md:px-10", children: [_jsx("div", { className: "text-white text-xl md:text-2xl font-semibold tracking-wide", children: _jsx(Link, { to: "/blogs", children: "ByteWords" }) }), _jsxs("div", { className: "hidden md:flex items-center gap-6", children: [_jsx(Link, { to: "/blogs", className: "text-white hover:text-gray-300", children: "Blogs" }), _jsx(Link, { to: "/publish", className: "text-white hover:text-gray-300", children: "Write" }), _jsx("button", { onClick: handleLogout, className: "bg-[#d21a1a] hover:bg-red-800 px-4 py-1.5 rounded text-white", children: "Logout" })] }), _jsx("div", { className: "md:hidden", children: _jsx("button", { onClick: () => {
                                document.getElementById("mobile-menu")?.classList.toggle("hidden");
                            }, className: "text-white text-xl", children: "\u2630" }) })] }), _jsxs("div", { id: "mobile-menu", className: "visibility-hidden flex flex-col items-center bg-black border-t border-gray-700 md:hidden py-3", children: [_jsx(Link, { to: "/blogs", className: "text-white py-2 hover:text-gray-300", children: "Blogs" }), _jsx(Link, { to: "/publish", className: "text-white py-2 hover:text-gray-300", children: "Write" }), _jsx("button", { onClick: handleLogout, className: "bg-[#d21a1a] hover:bg-red-800 px-4 py-1.5 rounded text-white", children: "Logout" })] })] }));
};
export default Appbar;
