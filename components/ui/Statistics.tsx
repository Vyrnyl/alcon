import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import HistoryIcon from "@mui/icons-material/History";
import EngineeringIcon from "@mui/icons-material/Engineering";
import GroupsIcon from '@mui/icons-material/Groups';

const Statistics = () => {
  return (
    <section className="w-full border-y border-white/10 dark:border-white/5 py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/10">
        <div className="flex flex-col items-center lg:items-start lg:pl-10 pb-8 md:pb-0">
          <div className="relative group">
            <span className="text-primary text-7xl lg:text-8xl font-black tracking-tighter leading-none block group-hover:scale-105 transition-transform duration-500">
              150+
            </span>
            <div className="absolute -top-4 -right-4 opacity-10 text-6xl">
              <GroupsIcon fontSize="inherit" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-6 h-px bg-primary"></div>
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
              Clients
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:pl-10 pt-8 md:pt-0">
          <div className="relative group">
            <span className="text-primary text-7xl lg:text-8xl font-black tracking-tighter leading-none block group-hover:scale-105 transition-transform duration-500">
              90+
            </span>
            <div className="absolute -top-4 -right-4 opacity-10 text-6xl">
              <EngineeringIcon fontSize="inherit" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-6 h-px bg-primary"></div>
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
              Employees
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:pl-10 pt-8 md:pt-0">
          <div className="relative group">
            <span className="text-primary text-7xl lg:text-8xl font-black tracking-tighter leading-none block group-hover:scale-105 transition-transform duration-500">
              10+
            </span>
            <div className="absolute -top-4 -right-4 opacity-10 text-6xl">
              <HistoryIcon fontSize="inherit" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-6 h-px bg-primary"></div>
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 text-center lg:text-left leading-tight">
              Years of Experience
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:pl-10 pt-8 md:pt-0">
          <div className="relative group">
            <span className="text-primary text-7xl lg:text-8xl font-black tracking-tighter leading-none block group-hover:scale-105 transition-transform duration-500">
              5+
            </span>
            <div className="absolute -top-4 -right-4 opacity-10 text-6xl">
              <MilitaryTechIcon fontSize="inherit" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-6 h-px bg-primary"></div>
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
              Awards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
