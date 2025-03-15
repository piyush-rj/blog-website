import Navbar from "../HomePage/Navbar";
import Hero from "../HomePage/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16"> 
        <Hero />
      </main>
    </>
  );
};

export default Home;
