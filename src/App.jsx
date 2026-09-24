import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Gretting from './components/Gretting';
import Badge from './components/Badge';

//Falsa API sendo importada
import PlaylistCard from './components/PlaylistCard'
import { useState } from 'react';
import { useEffect } from 'react';

import { CgDanger } from "react-icons/cg";

function App() {

  const [playlists, setPlaylists] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const [erro, setErro] = useState(null)

  useEffect(() => {
    async function dados() {

      try {
        const puxarDados = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        const dadosConvertidos = await puxarDados.json()
        console.log(dadosConvertidos)
        setPlaylists(dadosConvertidos.slice(0, 12))

      }
      catch (erro) {
        console.error('Não foi possível conectar ao servidor', erro)

      }
      finally {
        setIsLoading(false);

      }
    }
    dados()
  }, [])


  return (
    <>
      <div className='flex h-screen w-screen absolute justify-center items-center z-50 backdrop-blur-sm bg-black/50 text-red-500'>
        <div className='flex flex-col inset-0 bg-[#4f0000a0] h-70 w-110 rounded-2xl border-2 border-red-500'>
          <span className='flex justify-end mr-5'>
            <button className='text-2xl font-bold cursor-pointer'>
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

      <div className='flex flex-col h-screen bg-black text-white'>
        <div className='flex flex-1 overflow-hidden'>
          {/*Os componentes serão chamados abaixo*/}

          {/*Barra lateral tem que ser fixada*/}
          <Sidebar />

          <main className="flex-1 bg-zinc-900 rounded-lg m-2 p-6 overflow-y-auto">


            <Gretting name={"Natan"} />

            <Badge count={5} />

            <p className='text-zinc-400'> Seus álbuns seram exibidos aqui!</p>

            <section>
              <h2 className='text2xl font-bold text-white mb-6'>Feito para Natan</h2>

              {/* Container para os cards*/}
              <div>

                {isLoading ? (
                  <i className="fa-solid fa-spinner fa-spin text-2xl gap-10 "></i>
                ) : (
                  <div className='flex flex-row flex-wrap gap-4 w-100 m-2 text-ls items-center justify-around'>

                    {playlists.map((playlist) => {
                      return (
                        <PlaylistCard
                          key={playlist.id}
                          title={playlist.title}
                          coverUrl={playlist.url}
                        />
                      )
                    })}
                  </div>
                )}

              </div>

            </section>


          </main>

        </div>

        <Player />

      </div>
    </>
  )
}

export default App
