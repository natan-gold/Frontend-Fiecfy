function SidebarItem({ label, iconClass, onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors font-semibold"
        >
            <span className="w-6 h-6 flex bg-zinc-300 items-center justify-center rounded-sm">
                {iconClass}
            </span>

            {label}
        </button>
    );
}

export default SidebarItem;