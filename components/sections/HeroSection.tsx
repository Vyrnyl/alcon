import Image from "next/image";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          className="object-cover"
          alt="Construction Site" 
          src="/images/ConstructionSite.png"
          fill
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-0.5 w-12 bg-primary"></div>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm">
              Engineering Excellence
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase">
            Provide Effective <br />
            <span className="text-primary italic">Building</span> <br />
            Solutions!
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed font-light">
            Aliño Construction Corporation (AlCon) delivers engineering
            excellence through high-quality projects and innovative building
            solutions tailored for tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 hero-btns">
            <a
              className="bg-primary text-black px-10 py-5 rounded-xl font-black text-lg uppercase tracking-wider text-center hover:bg-white transition-all shadow-xl shadow-primary/20"
              href="#contact"
            >
              Request Project Quote
            </a>
            <a
              className="border-2 border-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg uppercase tracking-wider text-center hover:bg-white/10 transition-all backdrop-blur-sm"
              href="#projects"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <KeyboardDoubleArrowDownIcon fontSize="large" />
      </div>
    </section>
  );
};

export default HeroSection;
