import Sidebar from './components/Sidebar';
import Player from './components/Player';
import PlaylistGrid from './components/PlaylistGrid';
import Gretting from './components/Gretting';
import Badge from './components/Badge';

//Falsa API sendo importada
import { playlistData } from './data/mockData';
import PlaylistCard from './components/PlaylistCard';

function App() {

  return (
     <div className='flex flex-col h-screen bg-black text-white'>
      <div className='flex flex-1 overflow-hidden'>
        {/*Os componentes serão chamados abaixo*/ }
  
        {/*Barra lateral tem que ser fixada*/ }
          <Sidebar/>

      <main class="flex-1 bg-zinc-900 rounded-lg m-2 p-6 overflow-y-auto">
        
         

        <Gretting name={"Natan"}/>
        <Badge count={5}/>

         <p className='text-zinc-400'> Seus álbuns seram exibidos aqui!</p>

         <section>
          <h2 className='text2xl font-bold text-white mb-6'>Feito para Natan</h2>
          
          {/* Container para os cards*/}
          <div className='flex flex-wrap gap-6'>
            { playlistData.map(playlist => (
              <PlaylistCard
              key={playlist.id}
              title={playlist.title}
              description={playlist.description}
              coverUrl={playlist.coverUrl} />
            )) }

          </div>

         </section>

      </main>

      </div>

        <Player/>

   </div>
  )
}

export default App
