function SidebarItem({ label, iconClass, onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-3 pl-8 text-zinc-400 hover:text-white transition-colors text-base font-bold cursor-pointer"
        >
            <span className="w-6 h-6 flex items-center justify-center text-xl">
                {iconClass}
            </span>
            {label}
        </button>
    );
}

export default SidebarItem;
