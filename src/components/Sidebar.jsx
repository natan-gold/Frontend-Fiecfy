import Avatar from "./Avatar";
import LoginButton from "./LoginButton";
import menuItems from "../data/menuItems";

function Sidebar () {
    return (
        <aside className='w-72 bg-black p-6 flex flex-col gap-6'>
            <nav className="grid grid-cols-4  gap-3 ">
                <Avatar/>
                <div className="">
                    <LoginButton/>
                </div>
            </nav>
            <nav>

                <div className="w-full h-px bg-zinc-400"></div>

            </nav>
            
            <nav className="flex flex-col gap-4">


                  {menuItems.map(item => (
                <a href="#" key={item.id} className={item.iconClass}>
                    <div className="w-6 h-6 bg-zinc-400 rounded-sm"></div> <span>{item.label}</span>
                </a>   
            ))}

            </nav>
        </aside>
    );
}

export default Sidebar