
import { useState } from "react"

const likeButton = () => {
    //Cria o estado (Valor inicial = false (pode ser true também))
    const[isLiked, setIsLike] = useState(false);

    //Função que altera o estado de "Like ao ser clicado"
    function togleLike () {
        setIsLike(!isLiked);
    }
    
    return(
        <button
        onClick={togleLike}
        >
            {isLiked ? 'Curtiu' : 'Curtir'}
        </button>
    )
}

export default likeButton