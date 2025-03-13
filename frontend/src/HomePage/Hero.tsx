import { useState } from "react"
import ExploreButton from "./ExploreButton"
import GetStartedButton from "./GetStartedButton"
import Stickynote from "./Stickynote"

const Hero = () => {

    const [writeData, setWriteData] = useState({
        text: ["Write", "Read", "Share"],
        para: ["Express yourself through words. Our editor makes it easy to create beautiful, engaging content.", "Discover new perspectives and ideas.", "Engage with other writers and readers. Discover new perspectives and ideas."]
    })

  return (
    <div className="bg-black text-white pt-[8vh]" >

        <div className="h-[35vh]  text-8xl font-bold flex justify-center items-end mb-2 drop-shadow-[3px_3px_0px_#D84040] ">
            Welcome to <p className="pl-5 text-[#FFB22C] "> ByteWords</p>
        </div>
        <div className="text-[#414141] text-3xl font-semibold tracking-wider flex justify-center items-end mb-4">
            Share your thoughts, stories. Start writing today!
        </div>

        <div className=" p-2 flex justify-center" >
            <div className="flex items-end p-2 ">
                <GetStartedButton text="Get Started ->" />
            </div>
            <div className="flex items-start p-2 ">
                <ExploreButton text="Explore Blogs" />
            </div>
        </div>

        <div className="h-[18vh]  flex justify-center items-end text-[5vh]  font-bold tracking-widest text-[#C2C2C2]">
            <span className="border-b-1 border-t-1 border-[#C2C2C2]">
                D I S C O V E R
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