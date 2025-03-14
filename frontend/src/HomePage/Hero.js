import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ExploreButton from "./ExploreButton";
import GetStartedButton from "./GetStartedButton";
import Stickynote from "./Stickynote";
import { Link, useNavigate } from "react-router-dom";
const Hero = () => {
    const [writeData, setWriteData] = useState({
        text: ["Write", "Read", "Share"],
        para: ["Express yourself through words. Our editor makes it easy to create beautiful, engaging content.", "Discover new perspectives and ideas.", "Engage with other writers and readers. Discover new perspectives and ideas."]
    });
    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("token");
    function handleExplore() {
        if (isLoggedIn) {
            navigate("/blogs");
        }
        else {
            navigate("/signin");
        }
    }
    return (_jsxs("div", { className: "bg-black text-white pt-[8vh]", children: [_jsxs("div", { className: "h-[35vh]  text-8xl font-bold flex justify-center items-end mb-2 drop-shadow-[3px_3px_0px_#D84040] ", children: ["Welcome to ", _jsx("p", { className: "pl-5 text-[#FFB22C] ", children: " ByteWords" })] }), _jsx("div", { className: "text-[#414141] text-3xl font-semibold tracking-wide font-mono flex justify-center items-end mb-4", children: "Share your thoughts, stories & ideas. Start writing today!" }), _jsxs("div", { className: " p-2 flex justify-center", children: [_jsx("div", { className: "flex items-end p-2 ", children: _jsx(Link, { to: "/signup", children: _jsx(GetStartedButton, { text: "Get Started ->" }) }) }), _jsx("div", { onClick: handleExplore, className: "flex items-start p-2 ", children: _jsx(Link, { to: "/blogs", children: _jsx(ExploreButton, { text: "Explore Blogs" }) }) })] }), _jsx("div", { className: "h-[18vh]  flex justify-center items-end text-[5vh] mt-4 font-bold tracking-widest text-[#C2C2C2]", children: _jsx("span", { className: " border-[#C2C2C2] py-2 font-mono tracking-wide", children: "BLOGGING SIMPLIFIED" }) }), _jsxs("div", { className: "h-[55vh] flex justify-between items-center pl-[10vw] pr-[10vw]", children: [_jsx("div", { className: "flex", children: _jsx(Stickynote, { text: writeData.text[0], para: writeData.para[0] }) }), _jsx("div", { className: "flex", children: _jsx(Stickynote, { text: writeData.text[1], para: writeData.para[1] }) }), _jsx("div", { className: "flex", children: _jsx(Stickynote, { text: writeData.text[2], para: writeData.para[2] }) })] }), _jsx("div", { className: "h-[6vh] text-[#414141] flex justify-center items-center tracking-wide font-semibold text-xl border-t border-[0.5px]-[#414141]", children: "\u00A9 2025 ByteWords" })] }));
};
export default Hero;
