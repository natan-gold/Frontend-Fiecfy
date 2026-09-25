//Falsa API sendo importada
import { useState } from 'react';
import { useEffect } from 'react';

import { CgDanger } from "react-icons/cg";

 function Apifetch () {

    const [playlists, setPlaylists] = useState([])
    
      const [isLoading, setIsLoading] = useState(true)
    
      const [erro, setErro] = useState(null)
    
      useEffect(() => {
        async function dados() {
    
          {/*try {
            const puxarDados = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            
            if (!puxarDados.ok) {
              throw new Error(`Erro HTTP: ${puxarDados.status}`)
            }
            
            const dadosConvertidos = await puxarDados.json()
            console.log(dadosConvertidos)
            setPlaylists(dadosConvertidos.slice(0, 12))
          }
          catch (erro) {
            console.error('Não foi possível conectar ao servidor', erro)
            setErro(erro)
          }
          finally {
            setIsLoading(false);
    
          }
        }
        dados()
      }, [])*/}
    
      try {
            const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos_invalida')
            
            if (!res.ok) {
              throw new Error(`Rota não encontrada`)
            }
            
            const dadosConvertidos = await res.json()
            console.log(dadosConvertidos)
            setPlaylists(dadosConvertidos.slice(0, 12))
          }
          catch (erro) {
            console.error('Não foi possível conectar ao servidor', erro)
            setErro(erro)
          }
          finally {
            setIsLoading(false);
    
          }
        }
        dados()
      }, [])
    
    return(
      <>
      {erro &&(
      <div className='flex h-screen w-screen absolute justify-center items-center z-50 backdrop-blur-sm bg-black/50 text-red-500'>
        <div className='flex flex-col inset-0 bg-[#4f0000a0] h-70 w-110 rounded-2xl border-2 border-red-500'>
          <span className='flex justify-end mr-5'>
            <button className='text-2xl font-bold cursor-pointer'
            onClick={() => setErro(null)}>
            X
            </button>
          </span>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-white text-4xl font-bold'>
              Erro 500
            </h1>

            <div>
              <CgDanger className='w-32 h-32' />
              <p className='text-xl '>Erro no servidor</p>
            </div>
          </div>
        </div>
      </div>
      )}
      </>
    )
}

export default Apifetch;