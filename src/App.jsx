import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Gretting from './components/Gretting';
import Badge from './components/Badge';

//Hooks
import LikeButton from './components/likeButton';

//Falsa API sendo importada
import { playlistData } from './data/mockData';
import generos from './data/generos';
import PlaylistCard from './components/PlaylistCard'

function App() {

  return (
     <div className='flex flex-col h-screen bg-black text-white'>
      <div className='flex flex-1 overflow-hidden'>
        {/*Os componentes serão chamados abaixo*/ }
  
        {/*Barra lateral tem que ser fixada*/ }
          <Sidebar/>

      <main class="flex-1 bg-zinc-900 rounded-lg m-2 p-6 overflow-y-auto">
        
        <div className='flex gap-3'>
               {generos.map(genero => (
               <span className='rounded-full px-4 py-2 bg-zinc-700 hover:scale-105 transition-transform hover:bg-green-400' key={genero}>{genero}</span>
           ))}
        </div>

        <Gretting name={"Natan"}/>

        <Badge count={5}/>

         <p className='text-zinc-400'> Seus álbuns seram exibidos aqui!</p>

         <section>
          <h2 className='text2xl font-bold text-white mb-6'>Feito para Natan</h2>
          
          {/* Container para os cards*/}
          <div className='flex flex-wrap gap-6'>
            { playlistData.filter(item => item.type === "albums")
            .map(playlist => (
              <PlaylistCard
              key={playlist.id}
              title={playlist.title}
              description={playlist.description}
              coverUrl={playlist.coverUrl} />
            )) }

          </div>

         </section>

         <div className='flex flex-row  gap=10 w-100 m-2 text-ls items-center justify-around'> 

         <LikeButton className="w-10 h-10 rounded-2xl"
         />
         </div>

      </main>

      </div>

        <Player/>

   </div>
  )
}

export default App
