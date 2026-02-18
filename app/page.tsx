import Navbar from "@/components/layout/NavBar";
import HeroSection from "@/components/sections/HeroSection";

const Home = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white selection:bg-primary selection:text-black">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home;