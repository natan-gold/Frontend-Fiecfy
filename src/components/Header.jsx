import { ChevronLeft, ChevronRight } from 'lucide-react';

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-zinc-900/90 backdrop-blur-md py-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 shrink-0">

          <button className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-zinc-400 cursor-not-allowed">
            <ChevronLeft />
          </button>

          <button className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-zinc-400 cursor-not-allowed">
            <ChevronRight />
          </button>
          
        </div>
      </div>

      <div className="flex gap-4 items-center shrink-0">
        <button className="text-zinc-400 font-bold hover:text-white hover:scale-105 transition-transform text-sm">
          Inscrever-se
        </button>
        <button className="bg-white text-black font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform text-sm">
          Entrar
        </button>
      </div>
    </header>
  );
}

export default Header;