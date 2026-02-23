import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VerifiedIcon from "@mui/icons-material/Verified";

const PurposeSection = () => {
  const commitments = [
    {
      title: "COMMITMENT TO QUALITY AND SAFETY",
      description:
        "We aim to ensure timely delivery of quality projects without compromising the safety of its people and its assets.",
    },
    {
      title: "CONTINUOUS IMPROVEMENT",
      description:
        "We advocate for systematic planning, implementing, assessing, and correcting in an incremental process that results in a net long-term improvement.",
    },
    {
      title: "INTEGRITY",
      description:
        "We prioritize honesty, transparency, and commitment to delivering the best for our clients.",
    },
    {
      title: "ACCOUNTABILITY",
      description:
        "We commit that our people, and partners, shall be held accountable for all their decisions and actions taken.",
    },
    {
      title: "PROFESSIONALISM",
      description:
        "Strict adherence to the company’s rules and policies shall be observed at all times. Commitments made between the employer and employees, and the company and its partners, shall be fulfilled and delivered at all cost.",
    },
    {
      title: "LEADERSHIP, TEAMWORK, RESPECT, and TRUST",
      description:
        "We promote camaraderie amongst its people through teamwork and mutual respect. Leading by example, and trusting the capabilities of its people, are AlCon’s way of motivating everyone to move in the right and the same direction.",
    },
    {
      title: "SOCIAL RESPONSIBILITY",
      description:
        "We believe in the importance of taking care of our people, communities, and the environment around us. We give and we go beyond what is normal to directly create value, and to make an impact on the lives of those whom we can afford to reach out to. The company does not in any way contribute to the depletion of the natural resources, and the further destruction of the environment.",
    },
  ];

  return (
    <section className="py-18 bg-surface-dark" id="mission">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
            Our Core Purpose
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto"></div>
        </div>
        <div className="flex flex-col md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <div className="group relative p-10 bg-background-dark border border-border-dark rounded-3xl overflow-hidden hover:border-primary/50 transition-all">
            <div className="relative z-10">
              <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <RocketLaunchIcon className="text-primary" fontSize="large" />
              </div>
              <h3 className="text-3xl font-bold mb-6 italic uppercase tracking-tighter">
                Our Mission
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                Aliño Construction Corporation is committed to provide customer
                satisfaction and deliver quality infrastructure projects set by
                the standards in the industry. Consistent with its vision to
                become one of the country’s professionally competitive
                construction company. Aliño Construction Corporation endeavors
                to follow its five principles: commitment to quality, client
                satisfaction, employee participation, problem prevention, and
                continuous quality improvement.
              </p>
            </div>
          </div>
          {/* Values Card */}
          <div className="group relative p-10 bg-background-dark border border-border-dark rounded-3xl overflow-hidden hover:border-primary/50 transition-all">
            <div className="relative z-10">
              <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                <VerifiedIcon className="text-primary" fontSize="large" />
              </div>
              <h3 className="text-3xl font-bold mb-6 italic uppercase tracking-tighter">
                Our Values
              </h3>
              <div className="text-xl text-slate-300 leading-relaxed font-light space-y-6">
                {commitments.map((commit, i) => (
                  <div key={i}>
                    <span className="font-bold text-primary">
                      {commit.title}
                    </span> - {commit.description}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
