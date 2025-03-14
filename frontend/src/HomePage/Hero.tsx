import { useState } from "react"
import ExploreButton from "./ExploreButton"
import GetStartedButton from "./GetStartedButton"
import Stickynote from "./Stickynote"
import { Link, useNavigate } from "react-router-dom"

const Hero = () => {

    const [writeData, setWriteData] = useState({
        text: ["Write", "Read", "Share"],
        para: ["Express yourself through words. Our editor makes it easy to create beautiful, engaging content.", "Discover new perspectives and ideas.", "Engage with other writers and readers. Discover new perspectives and ideas."]
    })

    const navigate = useNavigate();
    const isLoggedIn = !!localStorage.getItem("token")

    function handleExplore() {
        if(isLoggedIn){
            navigate("/blogs")
        } else {
            navigate("/signin")
        }
    }

  return (
    <div className="bg-black text-white pt-[8vh]" >

        <div className="h-[35vh]  text-8xl font-bold flex justify-center items-end mb-2 drop-shadow-[3px_3px_0px_#D84040] ">
            Welcome to <p className="pl-5 text-[#FFB22C] "> ByteWords</p>
        </div>
        <div className="text-[#414141] text-3xl font-semibold tracking-wide font-mono flex justify-center items-end mb-4">
            Share your thoughts, stories & ideas. Start writing today!
        </div>

        <div className=" p-2 flex justify-center" >
            <div className="flex items-end p-2 ">
                <Link to={"/signup"}>
                    <GetStartedButton text="Get Started ->" />
                </Link>
            </div>
            <div onClick={handleExplore} className="flex items-start p-2 ">
                <Link to={"/blogs"}>
                    <ExploreButton text="Explore Blogs" />
                </Link>
            </div>
        </div>

        <div className="h-[18vh]  flex justify-center items-end text-[5vh] mt-4 font-bold tracking-widest text-[#C2C2C2]">
            <span className=" border-[#C2C2C2] py-2 font-mono tracking-wide">
                BLOGGING SIMPLIFIED
            </span>
        </div>

        <div className="h-[55vh] flex justify-between items-center pl-[10vw] pr-[10vw]">

            <div className="flex">
                <Stickynote text={writeData.text[0]} para={writeData.para[0]}/>
            </div>

            <div className="flex">
                <Stickynote text={writeData.text[1]} para={writeData.para[1]}/>
            </div>

            <div className="flex">
                <Stickynote text={writeData.text[2]}  para={writeData.para[2]}
                />
            </div>

        </div>
        <div className="h-[6vh] text-[#414141] flex justify-center items-center tracking-wide font-semibold text-xl border-t border-[0.5px]-[#414141]">
            © 2025 ByteWords
        </div>
    </div>
  )
}

export default Hero