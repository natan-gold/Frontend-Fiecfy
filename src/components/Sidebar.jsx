import SidebarItem from "./SidebarItem";
import Logo from "./Logo";
import { useState } from "react";
import mockData from "../data/mockData";

// Icons
import { FaHouseChimney } from "react-icons/fa6";
import { FaSearch, FaBook, FaPlus, FaArrowRight } from "react-icons/fa";

// Navegação principal (box de cima, igual ao "Home / Search" do vídeo)
const menuItems = [
    { id: 1, label: "Início", iconClass: <FaHouseChimney /> },
    { id: 2, label: "Buscar", iconClass: <FaSearch /> },
];

function Sidebar() {
   
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <aside className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">

             <Logo/>

            <nav className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
                {menuItems.map(item => (
                    <SidebarItem
                        key={item.id}
                        label={item.label}
                        iconClass={item.iconClass}
                    />
                ))}
            </nav>

         
            <section className="bg-[#121212] h-[85%] rounded flex flex-col overflow-hidden">

                {/* Cabeçalho: título à esquerda, ações à direita */}
                <div className="p-4 flex items-center justify-between">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    >
                        <FaBook className="w-5 h-5" />
                        <p className="font-semibold">Sua Biblioteca</p>
                    </button>

                    <div className="flex items-center gap-3 text-zinc-400">
                        <FaArrowRight className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                        <FaPlus className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                    </div>
                </div>

           
                <div className="flex-1 overflow-y-auto">

                 
                    <div
                        className={`flex flex-col gap-1 px-2 overflow-hidden transition-all ease-in-out duration-300 ${
                            isExpanded ? "max-h-[2000px]" : "max-h-0"
                        }`}
                    >
                        {mockData.map(playlist => (
                            <div
                                key={playlist.id}
                                className="flex items-center gap-3 rounded p-2 hover:bg-[#242424] cursor-pointer"
                            >
                                <img
                                    src={playlist.coverUrl}
                                    alt={playlist.title}
                                    className="w-12 h-12 rounded object-cover"
                                />
                                <div className="min-w-0">
                                    <p className="text-white text-sm truncate">{playlist.title}</p>
                                    <p className="text-zinc-400 text-xs truncate">{playlist.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cards de chamada (do vídeo) */}
                    <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1">
                        <h1>Crie sua primeira playlist</h1>
                        <p className="font-light text-sm">É fácil, vamos te ajudar</p>
                        <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:scale-105 transition-transform cursor-pointer">
                            Criar playlist
                        </button>
                    </div>

                    <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1">
                        <h1>Vamos encontrar alguns podcasts</h1>
                        <p className="font-light text-sm">Avisaremos você sobre novos episódios</p>
                        <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:scale-105 transition-transform cursor-pointer">
                            Explorar podcasts
                        </button>
                    </div>
                </div>
            </section>
        </aside>
    );
}

export default Sidebar;
