
function SidebarItem ( {label, iconClass} ) {
    return(
    <>
    <a href="#" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors font-semibold"> 
        <div className="w-6 h-6 flex bg-zinc-300 items-center justify-center rounded-sm">{iconClass} </div> {label}
    </a>
    </>      
    )
}

export default SidebarItem;