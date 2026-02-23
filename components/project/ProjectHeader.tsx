import React from "react";

const ProjectHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 lg:items-end">
      <div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
          Company <span className="text-primary">Profile</span>
        </h2>
        <p className="text-slate-400 max-w-md">
          Completed projects that demonstrate our commitment to quality and
          excellence.
        </p>
      </div>
    </div>
  );
};

export default ProjectHeader;
