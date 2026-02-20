import Navbar from "@/components/layout/NavBar";
import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import PurposeSection from "@/components/sections/PurposeSection";

const Home = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white selection:bg-primary selection:text-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PurposeSection />
    </div>
  );
};

export default Home;