import Navbar from "../HomePage/Navbar";
import Hero from "../HomePage/Hero";

const Home = () => {
  return (
    < div className="bg-black min-h-screen">
      <Navbar />
      <div className="mt-[40px]"> 
        <Hero />
      </div>
    </div>
  );
};

export default Home;
