import { ArrowRight } from "lucide-react";

interface StatItemProps {
  number: string;
  label: string;
}

function StatItem({ number, label }: StatItemProps) {
  return (
    <div>
      <h3 className="text-3xl font-medium mb-1">{number}</h3>
      <p className="text-white/60 text-xs uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="relative w-full h-[110vh] md:h-screen text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-900/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center pt-20">
        <div className="max-w-4xl">
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white/70 mb-6">
            Built to Inspire
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-tight">
            Design spaces <br className="hidden md:block" />
            <span className="font-medium">people love</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-10 font-light leading-relaxed">
            Bring your architectural projects to life with a template that puts
            your work front and center. Simple, elegant, and made for creators
            like you.
          </p>

          <button className="group bg-white text-slate-900 pl-6 pr-2 py-2 rounded-full flex items-center gap-4 font-semibold hover:bg-slate-100 transition-all">
            Get started
            <span className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowRight size={14} />
            </span>
          </button>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 w-full border-t border-white/10 backdrop-blur-sm bg-black/10">
          <div className="container mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem number="50+" label="Project complete" />
            <StatItem number="100+" label="Expert teams" />
            <StatItem number="$3.5M" label="Project value" />
            <StatItem number="24/7" label="Support available" />
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70 hover:opacity-100 cursor-pointer">
          <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5">
            <span className="text-[10px] font-medium uppercase tracking-widest">
              Scroll
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
