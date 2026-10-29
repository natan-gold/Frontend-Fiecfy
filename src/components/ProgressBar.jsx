import React from "react"

function progressBar() {
    const [progressPorcentage, setprogressPorcentage] = React.useState(50)
    return (
        <div
            className="group w-full bg-zinc-800 h-2 hover:h-4 rounded-full flex items-center transition-all duration-200"
            style={{
                backgroundImage: `linear-gradient(to right, white ${progressPorcentage}%, grey ${progressPorcentage}%)`
            }}>
        </ div>
    )
}

export default progressBar