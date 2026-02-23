import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section
      className="py-24 bg-background-light dark:bg-background-dark"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 grid-cols-1">
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">
                Let's <span className="text-primary">Build</span> Something
                Great
              </h2>
              <p className="text-slate-400 text-lg">
                Our experts are ready to turn your vision into structural
                reality. Reach out today for a consultation.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="size-12 rounded-xl bg-surface-dark flex items-center justify-center shrink-0 border border-border-dark">
                  <LocationOnIcon className="text-primary" fontSize="large" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-1">
                    Our Headquarters
                  </h4>
                  <p className="text-slate-400 leading-relaxed">
                    Unit 904 Richmonde Plaza Condo,
                    <br />
                    San Miguel Ave., Pasig City, Philippines
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="size-12 rounded-xl bg-surface-dark flex items-center justify-center shrink-0 border border-border-dark">
                  <MailOutlineIcon className="text-primary" fontSize="large" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-1">
                    Email Us
                  </h4>
                  <p className="text-slate-400">alino.construction@yahoo.com</p>
                </div>
              </div>
              <div className="h-64 rounded-2xl overflow-hidden border border-border-dark relative">
                <img
                  alt="Map location"
                  className="w-full h-full object-cover grayscale opacity-50"
                  data-alt="Abstract map representation of a city layout"
                  data-location="Pasig City"
                  src="/images/location.png"
                />
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <span className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                    Find us on Map
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-dark p-10 rounded-3xl border border-border-dark shadow-2xl">
            <h3 className="text-2xl font-black uppercase mb-8 italic tracking-tight">
              Request Project Quotation
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-background-dark border-border-dark rounded-xl px-4 py-4 text-white focus:border-primary focus:ring-0 transition-all placeholder:text-slate-600"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-background-dark border-border-dark rounded-xl px-4 py-4 text-white focus:border-primary focus:ring-0 transition-all placeholder:text-slate-600"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Subject
                </label>
                <input
                  className="w-full bg-background-dark border-border-dark rounded-xl px-4 py-4 text-white focus:border-primary focus:ring-0 transition-all placeholder:text-slate-600"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Message
                </label>
                <textarea
                  className="w-full bg-background-dark border-border-dark rounded-xl px-4 py-4 text-white focus:border-primary focus:ring-0 transition-all placeholder:text-slate-600"
                  placeholder="Write something"
                  rows={4}
                ></textarea>
              </div>
              <button
                className="w-full bg-primary text-black py-5 rounded-xl font-black text-lg uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all"
                type="submit"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
