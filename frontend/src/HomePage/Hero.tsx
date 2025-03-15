import { useState } from "react";
import ExploreButton from "./ExploreButton";
import GetStartedButton from "./GetStartedButton";
import Stickynote from "./Stickynote";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
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
        } else {
            navigate("/signin");
        }
    }

    return (
        <div className="bg-black text-white pt-[8vh] px-4 md:px-8 lg:px-12">
            {/* Title */}
            <div className="h-auto text-4xl md:text-6xl lg:text-8xl font-bold flex flex-col md:flex-row justify-center items-center text-center md:text-left mb-4 drop-shadow-[3px_3px_0px_#D84040]">
                Welcome to 
                <p className="pl-2 md:pl-5 text-[#FFB22C]">ByteWords</p>
            </div>

            {/* Subtitle */}
            <div className="text-[#414141] text-lg md:text-2xl lg:text-3xl font-semibold tracking-wide font-mono text-center mb-6">
                Share your thoughts, stories & ideas. Start writing today!
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-4">
                <Link to={"/signup"}>
                    <GetStartedButton text="Get Started ->" />
                </Link>
                <div onClick={handleExplore}>
                    <Link to={"/blogs"}>
                        <ExploreButton text="Explore Blogs" />
                    </Link>
                </div>
            </div>

            {/* Slogan */}
            <div className="h-auto flex justify-center items-center text-2xl md:text-4xl lg:text-5xl mt-6 font-bold tracking-widest text-[#C2C2C2] text-center">
                <span className="border-[#C2C2C2] py-2 font-mono tracking-wide">
                    BLOGGING SIMPLIFIED
                </span>
            </div>

            {/* Sticky Notes Section */}
            <div className="h-auto flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
                {writeData.text.map((item, index) => (
                    <div key={index} className="w-full md:w-1/3 flex justify-center">
                        <Stickynote text={item} para={writeData.para[index]} />
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="h-auto text-[#414141] flex justify-center items-center tracking-wide font-semibold text-lg md:text-xl border-t border-gray-600 mt-8 py-4 text-center">
                © 2025 ByteWords
            </div>
        </div>
    );
};

export default Hero;
