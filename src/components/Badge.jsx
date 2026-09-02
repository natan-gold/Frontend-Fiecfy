function Badge({ count }) {
    return (
        <span className="w-4 h-4 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {count}
        </span>
    );
}

export default Badge;