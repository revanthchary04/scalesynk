import { ReactNode } from "react";
import { ArrowRight, Box, Settings, Phone } from "lucide-react";

interface CardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  dark: boolean;
  bgImage: string;
}

function Card({ icon, title, desc, bgImage }: CardProps) {
  // If there's a background image, render the "Projects" style card
  if (bgImage) {
    return (
      <div className="group relative bg-white rounded-xl h-[400px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all">
        <img
          src={bgImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors"></div>

        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          <div className="w-10 h-10 bg-white text-slate-900 rounded-lg flex items-center justify-center shadow-lg">
            {icon}
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-medium mb-2">{title}</h3>
            <p className="text-white/90 text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              {desc}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Standard White Card
  return (
    <div className="group relative bg-white rounded-xl p-8 h-[400px] flex flex-col justify-between overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all border border-slate-100">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-48 h-48 border border-slate-100 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-medium mb-3 text-slate-900">{title}</h3>
      </div>

      <div className="relative z-10">
        <p className="text-slate-500 text-sm leading-relaxed mb-6">{desc}</p>
        <div className="w-full h-[1px] bg-slate-100 mb-6"></div>
        <div className="flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:gap-4 transition-all">
          Explore now <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}

export default function Cards() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Card
            icon={<Box size={20} />}
            title="Our projects"
            desc="Take a look at our portfolio to watch ideas come to life."
            dark={false}
            bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
          />

          {/* Card 2 */}
          <Card
            icon={<Settings size={20} />}
            title="Our services"
            desc="Discover our services and take your project to the next level with us."
            dark={false}
            bgImage=""
          />

          {/* Card 3 - Dark */}
          <div className="group relative bg-slate-900 rounded-xl p-8 h-[400px] flex flex-col justify-between overflow-hidden text-white cursor-pointer shadow-xl">
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

            <div className="relative z-10 flex justify-between items-start">
              <div className="w-10 h-10 bg-white text-slate-900 rounded-lg flex items-center justify-center">
                <Phone size={20} />
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-medium mb-3">Contact us</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Reach out to us to share your vision, and let&apos;s make it a
                reality.
              </p>
              <div className="w-full h-[1px] bg-white/10 mb-6"></div>
              <div className="flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white group-hover:gap-4 transition-all">
                Get in touch <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
