import Avatar from "./Avatar";
import LoginButton from "./LoginButton";
import SidebarItem from "./SidebarItem";

import { useState } from "react";

import { playlistData } from "../data/mockData";

// Icons
import { FaHouseChimney } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

const menuItems = [
    {
        id: 1,
        label: "Início",
        iconClass: <FaHouseChimney />
    },
    {
        id: 2,
        label: "Buscar",
        iconClass: <FaSearch />
    },
    {
        id: 3,
        label: "Biblioteca",
        iconClass: <FaBook />
    }
];

function Sidebar() {

    const [notificacoes, setNotificacoes] = useState(3);

    // Expandir a Biblioteca
    const [IsExpanded, setIsExpanded] = useState(false);

    function Expandir() {
        setIsExpanded(!IsExpanded);
    }

    return (
        <aside className="w-72 bg-black p-6 flex flex-col gap-6">

            <nav className="flex flex-col gap-3">

                <Avatar />

                <div>
                    <LoginButton />
                </div>

                <button
                    className="relative bg-green-400 rounded-2xl w-30 hover:bg-green-300 transition-all"
                >
                    Notificações

                    {notificacoes > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                            {notificacoes}
                        </span>
                    )}
                </button>

                <button
                    className="bg-gray-600 w-30 rounded-2xl hover:bg-gray-400"
                    onClick={() => setNotificacoes(0)}
                >
                    Limpar
                </button>

            </nav>

            <nav>
                <div className="w-full h-px bg-zinc-400"></div>
            </nav>

            <nav className="flex flex-col gap-4 ">

                {menuItems.map(item => (
                    <div key={item.id} className={`${item.id === 3 && ("border-t border-zinc-400 pt-3")}`}>
                        <SidebarItem
                            label={item.label}
                            iconClass={item.iconClass}
                            onClick={item.id === 3 ? Expandir : undefined}
                        />

                        {/* Mostra as playlists somente na Biblioteca */}
                        {item.id === 3 &&  (

                            <div className={` flex flex-col overflow-hidden gap-3 ml-4 mt-2 ${IsExpanded ? "h-full" : "h-[0%]"} duration-300 border-b border-zinc-400`}>
                                {playlistData.map(playlist => (
                                    <div
                                        key={playlist.id}
                                        className="flex items-center gap-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 p-3">

                                        <img
                                            src={playlist.coverUrl}
                                            alt={playlist.title}
                                            className="w-10 h-10 rounded" />
                                        <div>

                                            <p className="text-white text-sm">
                                                {playlist.title}
                                            </p>

                                            <p className="text-zinc-400 text-xs">
                                                {playlist.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

            </nav>

        </aside>
    );
}

export default Sidebar;