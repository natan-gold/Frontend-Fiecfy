import LikeButton from "./likeButton";

function PlaylistCard({ title, coverUrl }) {
  return (
    <div className="flex flex-col w-250px h-350px m-1 text-center items-center justify-between bg-zinc-800 rounded-lg p-4 hover:bg-zinc-700 transition-colors">
      <img 
        className="w-full h-48 object-cover rounded-2xl border border-zinc-700"
        src={coverUrl} 
        alt={`Capa do álbum ${title}`} 
      />

      <h2 className="font-bold text-lg text-white truncate w-full">{title}</h2>

      <LikeButton className="flex w-10 h-10 rounded-2xl" />
    </div>
  );
}

export default PlaylistCard;