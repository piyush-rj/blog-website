import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ExploreButton from "./ExploreButton";
import GetStartedButton from "./GetStartedButton";
import Stickynote from "./Stickynote";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(TextPlugin);
const Hero = () => {
    useGSAP(() => {
        gsap.to("#heroSlogan", {
            duration: 2,
            text: "GO AHEAD! Start writing today.",
            delay: 3
        });
    });
    const [writeData] = useState({
        text: ["Write", "Read", "Share"],
        para: [
            "Express yourself through words. Our editor makes it easy to create beautiful, engaging content.",
            "Discover new perspectives and ideas.",
            "Engage with other writers and readers. Discover new perspectives and ideas."
        ]
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
    return (_jsxs("div", { className: " text-[#efefef] pt-[8vh] px-4 md:px-8 lg:px-12", children: [_jsxs("div", { className: "h-auto text-4xl md:text-6xl lg:text-8xl font-bold flex flex-col md:flex-row justify-center items-center text-center md:text-left mb-4 drop-shadow-[3px_3px_0px_#D84040]", children: ["Welcome to", _jsx("p", { className: "pl-2 md:pl-5 text-[#FFB22C]", children: "ByteWords" })] }), _jsx("div", { id: "heroSlogan", className: "text-[#414141] text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide font-mono text-center mb-6", children: "Share your thoughts, stories & ideas." }), _jsxs("div", { className: "flex flex-col md:flex-row justify-center items-center sStart writing today!pace-y-3 md:space-y-0 md:space-x-4", children: [_jsx(Link, { to: "/signup", children: _jsx(GetStartedButton, { text: "Get Started ->" }) }), _jsx("div", { onClick: handleExplore, children: _jsx(Link, { to: "/blogs", children: _jsx(ExploreButton, { text: "Explore Blogs" }) }) })] }), _jsx("div", { className: "h-auto pt-[70px] flex justify-center items-center text-2xl md:text-4xl lg:text-5xl mt-6 font-bold tracking-widest text-[#C2C2C2] text-center", children: _jsx("span", { className: "border-[#C2C2C2] py-2 font-mono tracking-wide", children: "BLOGGING SIMPLIFIED" }) }), _jsx("div", { className: " h-auto pt-[50px] pb-[30px] flex flex-col md:flex-row justify-center items-center gap-6 mt-8", children: writeData.text.map((item, index) => (_jsx("div", { className: " w-full md:w-1/3 flex justify-center", children: _jsx(Stickynote, { text: item, para: writeData.para[index] }) }, index))) }), _jsx("div", { className: "h-[15px] w-full text-[#414141] flex justify-center items-center tracking-wide font-mono text-sm md:text-xl border-t border-gray-600 mt-8 py-6 text-center", children: "\u00A9 2025 ByteWords | PIYUSH" })] }));
};
export default Hero;
