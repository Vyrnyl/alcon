import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

interface PopupISOProps {
  isShown: boolean;
  onClose: () => void;
};

const PopupISO = ({ isShown, onClose }: PopupISOProps) => {
  
  if(!isShown) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md px-6">
      <div className="bg-background-dark relative w-full max-w-md glass-effect rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)] border border-white/10 animate-[fadeIn_.4s_ease-out]">
        <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full text-slate-400  transition-all bg-white/40 hover:bg-primary hover:text-black">
          <CloseIcon fontSize="large" />
        </button>

        <div className="py-8 flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>

            <div className="relative flex items-center justify-center w-24 h-24 bg-primary rounded-full shadow-[0_0_50px_rgba(255,217,0,0.35)]">
              <VerifiedUserIcon fontSize="large" />
            </div>
          </div>

          <Image
            src="/iso-announcement.png"
            alt="ISO Certification"
            className="mb-6 object-cover rounded-lg"
            width={200}
            height={150}
          />

          <h3 className="text-2xl font-extrabold text-white mb-2">
            ISO Certified Excellence
          </h3>

          <p className="text-slate-400 text-sm max-w-xs mb-8 leading-relaxed">
            We are proud to operate under internationally recognized quality
            management standards.
          </p>

          <button 
          onClick={onClose}
          className="w-[80%] bg-primary hover:bg-primary/90 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.97] shadow-xl shadow-primary/30">
            <span>Continue to Website</span>
            <ArrowForwardIcon />
          </button>

          <p className="mt-6 text-slate-500 text-xs tracking-widest uppercase">
            Building Excellence Through Quality
          </p>
        </div>

        <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-primary/20 rounded-tl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-primary/20 rounded-br-2xl"></div>
      </div>
    </div>
  );
};

export default PopupISO;
