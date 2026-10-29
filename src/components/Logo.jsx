import logoSpotify from "../assets/Spotify_icon.png"

function Logo () {
    return (
    <div className="flex p-2 justify-start items-center gap-3 flex-row">
        <img className="w-12 h-12 rounded-full object-cover" 
        src={logoSpotify} 
        alt="Logo do Fiecfy"/>
        <h2 className=""> Fiecfy</h2>
    </div>
)}

export default Logo