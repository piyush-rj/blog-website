import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import ExploreButton from "./ExploreButton";
import GetStartedButton from "./GetStartedButton";
import Stickynote from "./Stickynote";
const Hero = () => {
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("token");
    function handleExplore() {
        isLoggedIn ? navigate("/blogs") : navigate("/signin");
    }
    return (_jsxs("div", { className: "bg-black text-white pt-[8vh] px-4 md:px-8 lg:px-12", children: [_jsxs("div", { className: "text-4xl md:text-6xl lg:text-8xl font-bold flex flex-col md:flex-row justify-center items-center text-center mb-4 drop-shadow-[3px_3px_0px_#D84040]", children: ["Welcome to", _jsx("p", { className: "pl-2 md:pl-5 text-[#FFB22C]", children: "ByteWords" })] }), _jsx("div", { className: "text-[#414141] text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide font-mono text-center mb-6", children: "Share your thoughts, stories & ideas. Start writing today!" }), _jsxs("div", { className: "flex flex-col md:flex-row justify-center items-center gap-4", children: [_jsx(Link, { to: "/signup", children: _jsx(GetStartedButton, { text: "Get Started ->" }) }), _jsx("div", { onClick: handleExplore, children: _jsx(Link, { to: "/blogs", children: _jsx(ExploreButton, { text: "Explore Blogs" }) }) })] }), _jsx("div", { className: "text-2xl md:text-4xl lg:text-5xl mt-4 font-bold tracking-widest text-[#C2C2C2] text-center", children: _jsx("span", { className: "border-[#C2C2C2] py-2 font-mono tracking-wide", children: "BLOGGING SIMPLIFIED" }) }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 w-full max-w-[90vw] mx-auto", children: [_jsx("div", { className: "sm:flex lg:flex lg:justify-center ", children: _jsx(Stickynote, { text: "Write", para: "Express yourself through words. Our editor makes it easy to create beautiful, engaging content." }) }), _jsx("div", { className: "sm:flex lg:flex lg:justify-center", children: _jsx(Stickynote, { text: "Read", para: "Discover new perspectives and ideas." }) }), _jsx("div", { className: "sm:flex lg:flex lg:justify-center", children: _jsx(Stickynote, { text: "Share", para: "Engage with other writers and readers. Discover new perspectives and ideas." }) })] }), _jsx("div", { className: "text-[#414141] flex justify-center items-center tracking-wide font-semibold text-lg md:text-xl border-t border-gray-600 mt-8 py-4 text-center", children: "\u00A9 2025 ByteWords" })] }));
};
export default Hero;
