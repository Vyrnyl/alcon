const Footer = () => {
  return (
    <footer className="py-12 border-t border-border-dark bg-background-dark">
      <div className="max-w-7xl mx-auto px-28 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <div className="h-16 w-22 flex rounded-sm">
            <img
              className="w-full h-full rounded-sm"
              src="/logo.png"
              alt="AlCon"
            />
          </div>
          <p className="text-[.7rem] text-slate-500 max-w-md font-sans">Building Excellence. Delivering Quality.</p>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="text-center">
            <h1 className="text-sm font-black tracking-wide uppercase">ALIÑO CONSTRUCTION</h1>
            <p className="text-[.7rem] text-slate-500 max-w-md font-sans">Trusted professionals in construction, engineering, and project delivery. Committed to safety, quality, and innovation.</p>
          </div>
          <p className="text-slate-500 text-sm font-medium text-center">
            © 2026{" "}
            <span className="text-white">Aliño Construction Corporation</span>.
            All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="tracking-wide text-slate-400">ISO CERTIFIED</p>
          <div className="h-16 w-16 flex rounded-sm">
            <img
              className="w-full h-full rounded-sm"
              src="/iso.png"
              alt="AlCon" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
