import React from "react"

function progressBar() {
    const [progressPorcentage, setprogressPorcentage] = React.useState(67)
    return (
    <div className="flex flex-row w-full items-center justify-center gap-2">
        <p>
            1:08
        </p>
        <div
            className="group w-full bg-zinc-800 h-1 hover:h-3 rounded-full flex items-center transition-all duration-200"
            style={{
                backgroundImage: `linear-gradient(to right, white ${progressPorcentage}%, grey ${progressPorcentage}%)`
            }}>
        </div>
        <p>
            3:45
        </p>
    </div>
    )
}

export default progressBar