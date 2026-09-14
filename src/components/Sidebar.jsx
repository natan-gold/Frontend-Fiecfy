import Avatar from "./Avatar";
import LoginButton from "./LoginButton";
import SidebarItem from "./SidebarItem";
import { useState } from "react";

//Icons
import { FaHouseChimney } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

const menuItems = [
    {
    id : 1,
    label : "Início",
    iconClass : <FaHouseChimney />
    },
    {
    id : 2,
    label : "Buscar",
    iconClass : <FaSearch />
    },
    {
    id : 3,
    label : "Biblioteca",
    iconClass : <FaBook />
    }
]

function Sidebar (label, iconClass) {

    const [notificacoes, setNotificacoes] = useState(3);


    return (
        <aside className='w-72 bg-black p-6 flex flex-col gap-6'>
            <nav className="flex flex-col  gap-3 ">
                <Avatar/>
                <div className="">
                    <LoginButton/>
                </div>

                <button className="relative">
                    Notificações

                    {notificacoes > 0 && ( 
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs"> {notificacoes} 
                        </span> )}
                </button>

                <button onClick={() => setNotificacoes(0)}>
                     Limpar 
                </button>
            </nav>
            <nav>

                <div className="w-full h-px bg-zinc-400"></div>

            </nav>
            
            <nav className="flex flex-col gap-4">
            
            {menuItems.map(item=> (
                <SidebarItem
                key = {item.id}
                label = {item.label}
                iconClass = {item.iconClass}
                />
            ))}

            </nav>
        </aside>
    );
}

export default Sidebar