import LikeButton from "./likeButton"

function PlaylistCard ({title, coverUrl}) {
    return (
        <div className="flex flex-col w-[250px] h-[350px] m-1 text-center gap-3 bg-zinc-800 rounded-lg p-4 hover:bg-zinc-700 transition-colors">

            <img className="border rounded-2xl"
            src= {coverUrl} 
            alt="Capa de Álbum" 
            />

            <h2> {title}</h2>

         <LikeButton className="flex  w-10 h-10 rounded-2xl"/>
        </div>
    )
}

export default PlaylistCard

