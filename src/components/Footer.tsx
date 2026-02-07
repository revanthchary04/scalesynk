export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-lg">
          <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-white rotate-45"></div>
          </div>
          Elevate
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Elevate Architecture. All rights
          reserved.
        </p>
        <div className="flex gap-6 text-slate-400">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 cursor-pointer transition-colors text-xs font-medium">
            FB
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 cursor-pointer transition-colors text-xs font-medium">
            IN
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 cursor-pointer transition-colors text-xs font-medium">
            TW
          </div>
        </div>
      </div>
    </footer>
  );
}
