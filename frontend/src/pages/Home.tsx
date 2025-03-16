import Navbar from "../HomePage/Navbar"
import Hero from "../HomePage/Hero"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

const Home = () => {

  useGSAP(() => {
    const tl = gsap.timeline();


    tl.fromTo(
      "#navbar",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5" 
    );

    tl.fromTo(
      "#hero",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5"
    );
  });

  return (
    <div className="bg-black h-full w-full">
        <div id="navbar" className="fixed w-full pointer-events-auto z-50">
            <Navbar/>
        </div>
        <div id="hero" className="pt-[150px] z-0">
            <Hero/>
        </div>
    </div>
  )
}

export default Home