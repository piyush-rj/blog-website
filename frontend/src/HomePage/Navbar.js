import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
// import ThemeToggle from "./ThemeToggle"
const Navbar = () => {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("token");
    const handleClick = () => {
        if (isLoggedIn) {
            navigate("/blogs");
        }
        else {
            navigate("/signin");
        }
    };
    return (_jsxs("div", { className: "bg-black h-16 w-full flex justify-between items-center border border-b-gray-400 fixed z-50 backdrop-blur-3xl", children: [_jsx("div", { className: "flex-3/4 text-white pl-10 text-2xl font-semibold tracking-wide", children: _jsx(Link, { to: "/", children: "ByteWords" }) }), _jsxs("div", { className: " text-white flex flex-1/4 items-center justify-between pr-10 pl-10", children: [_jsx("div", { onClick: handleClick, className: "cursor-pointer hover:text-gray-300", children: _jsx(Link, { to: "/blogs", children: "Blogs" }) }), _jsx("div", { onClick: handleClick, className: "cursor-pointer hover:text-gray-300", children: "Write" }), _jsx("div", { className: "", children: _jsx(Link, { to: "/signup", children: _jsx(Button, { text: "Signup" }) }) }), _jsx("div", { children: _jsx(Link, { to: "/signin", children: _jsx(Button, { text: "Signin" }) }) })] })] }));
};
export default Navbar;
