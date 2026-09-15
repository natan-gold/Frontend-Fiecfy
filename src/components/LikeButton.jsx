import { useState } from "react"

{/* Icones */}
import { Heart } from 'lucide-react';

const LikeButton = () => {
    //Cria o estado (Valor inicial = false (pode ser true também))
    const[isLiked, setIsLike] = useState(false);

    //Função que altera o estado de "Like ao ser clicado"
    function togleLike () {
        setIsLike(!isLiked);
    }
    
    return(
        <div className=" w-6 h-6 flex items-center justify-center">
        
        <button className = {isLiked ? ("bg-green-400 text-white px-3 py-2 rounded-2xl") : ("bg-red-400 text-white px-3 py-2 rounded-2xl")} onClick={togleLike}>

             {isLiked ? <Heart/> : <Heart/>}

        </button>

    </div>
    )
}

export default LikeButton