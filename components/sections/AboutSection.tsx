import Image from "next/image";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import FoundationIcon from "@mui/icons-material/Foundation";

const AboutSection = () => {
  return (
    <section
      className="py-24 bg-background-light dark:bg-background-dark"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-4/5 rounded-2xl overflow-hidden border border-border-dark shadow-2xl">
              <Image
                src="/images/download.jpg"
                alt="Engineering Excellence"
                fill
                data-alt="Modern architectural structure made of concrete and glass"
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary p-12 rounded-2xl hidden md:block about-badge">
              <div className="text-black">
                <span className="text-6xl font-black block leading-none">
                  100+
                </span>
                <span className="text-sm font-bold uppercase tracking-widest mt-2 block">
                  Workforce Team
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              About <span className="text-primary">AlCon</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Aliño Construction Corporation (“AlCon”) is a privately- owned,
              general construction company, specializing in buildings and heavy
              civil works that includes bridges, flood control, roads and
              telecommunication towers, established and registered with the
              Securities and Exchange Commission in May 2014. We are duly
              licensed with the Philippine Contractors Accreditation Board, and
              various public and private entities whose projects are located all
              over the country. Year after year, AlCon experiences significant
              growth in terms of assets as well as the volume and value of
              projects. With more than 400 workers and with our own fleet of
              heavy equipment, we intend to continuously grow and be one of the
              competitive construction companies in the industry who
              consistently delivers high quality structures and efficient
              construction services to our clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-border-dark bg-surface-dark/50">
                <CorporateFareIcon className="text-primary" fontSize="large" />
                <h3 className="text-xl font-bold mb-2">General Construction</h3>
                <p className="text-sm text-slate-400">
                  Specializing in comprehensive building solutions for diverse
                  industries.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border-dark bg-surface-dark/50">
                <FoundationIcon className="text-primary" fontSize="large" />
                <h3 className="text-xl font-bold mb-2">Civil Works</h3>
                <p className="text-sm text-slate-400">
                  Expertise in large-scale infrastructure and foundation
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
