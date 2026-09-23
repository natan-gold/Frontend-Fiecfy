import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Gretting from './components/Gretting';
import Badge from './components/Badge';

//Falsa API sendo importada
import PlaylistCard from './components/PlaylistCard'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [playlists, setPlaylists] = useState([])

  const[isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function dados() {
      const puxarDados = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      const dadosConvertidos = await puxarDados.json()

      console.log(dadosConvertidos)

      setPlaylists(dadosConvertidos.slice(0,12))

      setIsLoading(false)
    }
    dados()
  }, [])


  return (
     <div className='flex flex-col h-screen bg-black text-white'>
      <div className='flex flex-1 overflow-hidden'>
        {/*Os componentes serão chamados abaixo*/ }
  
        {/*Barra lateral tem que ser fixada*/ }
          <Sidebar/>

      <main className="flex-1 bg-zinc-900 rounded-lg m-2 p-6 overflow-y-auto">


        <Gretting name={"Natan"}/>

        <Badge count={5}/>

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
             return(
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

        <Player/>

   </div>
  )
}

export default App
