import { playlistData } from './mockData';

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-zinc-900/90 backdrop-blur-md p-4 flex items-center justify-between gap-4">
      
      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">

        <div className="flex gap-2 shrink-0">
          <button className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-zinc-400 cursor-not-allowed">
            {'<'}
          </button>
          <button className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-zinc-400 cursor-not-allowed">
            {'>'}
          </button>
        </div>

        {/* 2. Mapeando e renderizando os cards/links de Playlist no Header */}
        <nav className="flex items-center gap-3">
          {playlistData.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 bg-zinc-800/60 hover:bg-zinc-800 p-1.5 pr-3 rounded-full cursor-pointer transition-colors shrink-0"
            >
              <img
                src={item.coverUrl}
                alt={item.title}
                className="w-7 h-7 rounded-full object-cover"
              />
              <span className="text-xs font-semibold text-white whitespace-nowrap">
                {item.title}
              </span>
            </div>
          ))}
        </nav>
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