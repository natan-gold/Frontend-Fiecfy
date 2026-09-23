import { useState } from "react"
import { playlistData } from "../data/mockData";
import PlaylistCard from "./PlaylistCard";

function handleSubmit (e) {
    e.preventDefault();
}

function Formulario () {

    const [email, setEmail] = useState("")

    const [senha, setSenha] = useState("")

    return(
        <form onSubmit={handleSubmit}>

            <h1>Formulario</h1>

            <label htmlFor="">Email:</label>
            <input type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="">Senha</label>
            <input type="password"
            value={senha} 
            onChange={(e) => setSenha(e.target.value)}/>

            <div>
                {playlistData.filter(item => item.type === "podcast")
                .map(item => (
                <PlaylistCard
                key={item.id}
                title={item.title}
                description={item.description}
                coverUrl={item.coverUrl}
                />
            ))}
            </div>

        </form>
    )

}

export default Formulario