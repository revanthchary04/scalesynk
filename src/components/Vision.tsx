interface LogoItemProps {
  name: string;
}

function LogoItem({ name }: LogoItemProps) {
  return (
    <div className="flex items-center gap-2 font-bold text-xl">
      <div className="w-6 h-6 rounded-full bg-slate-300/50"></div>
      {name}
    </div>
  );
}

export default function Vision() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light text-slate-300 leading-tight">
            Experience innovative architecture that transforms{" "}
            <span className="text-slate-900 font-medium">
              your vision into reality.
            </span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-between gap-12 max-w-6xl mx-auto">
          {/* Left: Avatars & Text */}
          <div className="flex-1">
            <div className="flex -space-x-3 mb-6">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="User"
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-slate-500 max-w-md leading-relaxed">
              We craft inspiring spaces that blend cutting-edge design with
              enduring functionality, turning your vision into reality.
            </p>
          </div>

          {/* Right: Big Button */}
          <div>
            <button className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-2xl shadow-slate-900/20">
              Learn more
            </button>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-24 pt-12 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-40 grayscale">
          <LogoItem name="Logoipsum" />
          <LogoItem name="Logoipsum" />
          <LogoItem name="Logoipsum" />
          <LogoItem name="Logoipsum" />
        </div>
      </div>
    </section>
  );
}
