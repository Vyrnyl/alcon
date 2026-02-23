import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/NavBar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import PolicySection from "@/components/sections/PolicySection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PurposeSection from "@/components/sections/PurposeSection";

const Home = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white selection:bg-primary selection:text-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PurposeSection />
      <ProjectsSection />
      <PolicySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;