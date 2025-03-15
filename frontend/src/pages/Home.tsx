import Navbar from "../HomePage/Navbar"
import Hero from "../HomePage/Hero"

const Home = () => {
  return (
    <div className="bg-black h-screen w-full">
        <div className="mt-0">
            <Navbar/>
        </div>
        <div className="pt-[150px]">
            <Hero/>
        </div>
    </div>
  )
}

export default Home