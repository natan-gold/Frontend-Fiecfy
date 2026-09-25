import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login () {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const[senha, setSenha] = useState("")

    function handleSubmit(e) {
      e.preventDefault();
      console.log(setEmail, setSenha)
    }

    function Esvaziar() {
      setEmail("")
      setSenha("")
    }

    return(
        <>
    <div className="flex h-screen w-screen justify-center items-center bg-zinc-700/50 ">

        <form className="flex h-screen w-screen items-center justify-center bg-black flex-col "
        onSubmit={handleSubmit}>
    <div className="flex h-120 w-100 justify-center text-white items-center border-green-400 border-2 flex-col gap-10 rounded-2xl">

        <h1 className="text-6xl text-green-400">FiecFy</h1>
       
       <div className="flex flex-row justify-center items-center gap-2">
        <label className="text-lg "
        htmlFor="">Email:</label>
        <input className="bg-zinc-800 text-white rounded-2xl px-4 py-2 border-2 border-green-600"
        type="text" 
        placeholder="Digite seu Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
       </div>

       <div className="flex flex-row justify-center items-center gap-2">
        <label className="text-lg "
        htmlFor="">Senha:</label>
        <input className="bg-zinc-800 text-white rounded-2xl border-2 border-green-600 px-4 py-2"
        type="password" 
        placeholder="Digite sua Senha" 
        value={senha}
        onChange={(e) => setSenha(e.target.value)}/>
        </div>

        <div className="flex gap-15 justify-between">
        <button className="flex h-15 w-25 justify-center items-center rounded-2xl bg-green-700 text-white hover:bg-green-400 hover:scale-110 transform transition-all duration-300"
        onClick={() =>navigate('/app')}>
            Entrar
        </button>

        <div className="flex items-end justify-end">
        <button className="flex h-10 w-15 justify-center items-center rounded-2xl bg-green-700 text-white hover:bg-red-700 hover:scale-110 transform transition-all duration-300"
        onClick={Esvaziar}>
            Limpar
        </button>
        </div>
        </div>
    </div>
        </form>
    </div>
        </>
    )
}

export default Login