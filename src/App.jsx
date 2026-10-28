import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Gretting from './components/Welcome';
import PlaylistCard from './components/PlaylistCard';

function App() {
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Simula a busca de dados em uma API externa ou arquivo local
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        setIsLoading(true);
        // Exemplo: simulando um tempo de resposta de 1.5 segundos
        setTimeout(() => {
          const mockData = [
          {
            id: 1,
            title: "Racionais",
            description: "Racionais Mcs e mais.",
            coverUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCeeJm_mTFKaPO3Gm6Ds6VlrNRDgZO_QLQtA2ULUL8A&s=10",
            type: "album"
          },
          {
            id: 2,
            title: "Podpah",
            description: "O maior podcast do Brasil",
            coverUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgwQ_p6AW_7Eo6dJslk2zAAaPjuiA4ez7B3iccLez6ag&s=10",
            type: "podcast"
          },
          {
            id: 3,
            title: "Rock",
            description: "Rock pesado, AC/DC, Slipknot, System of a Down e mais..",
            coverUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX1RhQHdOooes22gJinDPILVK6NhRiE2rVIRtC87AKQg&s=10",
            type: "album"
          }, 
          {
            id: 4,
            title: "Flow Podcast",
            description: "O segundo maior Podcast do Brasil, com Igor 3k e Jean",
            coverUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuryOgeDesp82_SkZvG10Istjf5F4hJOYoCBzfW9eL8A&s=10",
            type: "podcast"
          }
        ];
          setPlaylists(mockData);
          setIsLoading(false);
        }, 1500);
      } catch (error) {
        console.error("Erro ao carregar as playlists:", error);
        setIsLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  // Filtra as playlists com base na busca do usuário
  const filteredPlaylists = playlists.filter((album) =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex flex-col h-screen bg-black text-white'>
      <div className='flex flex-1 overflow-hidden'>
        
        {/* Barra lateral fixa */}
        <Sidebar />

        <main className="flex-1 bg-zinc-900 rounded-lg m-2 p-6 overflow-y-auto">
          <Gretting name={"Natan"} />
          
          <p className='text-zinc-400 mb-4'> Seus álbuns serão exibidos aqui!</p>

          <section>
            {/* Corrigido: text2xl -> text-2xl */}
            <h2 className='text-2xl font-bold text-white mb-4'>Feito para Natan</h2>

            <input 
              className="bg-zinc-800 p-2 rounded-lg mb-6 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-green-500"
              type="text"
              placeholder="Pesquisar álbum..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Container para os cards */}
            <div>
              {isLoading ? (
                <div className="flex items-center justify-center py-10">
                  <i className="fa-solid fa-spinner fa-spin text-3xl text-green-500"></i>
                </div>
              ) : (
                <div className='flex flex-row flex-wrap gap-4 items-center justify-start'>
                 {filteredPlaylists.length > 0 ? (
                    filteredPlaylists.map((album) => (
                   <PlaylistCard 
                     key={album.id} 
                     title={album.title} 
                      coverUrl={album.coverUrl} // CORRIGIDO: mudado de album.url para album.coverUrl
                    />
                   ))
                ) : (
                <p className="text-zinc-500">Nenhum álbum encontrado.</p>
                 )}
                </div>
              )}
            </div>
          </section>
        </main>
      </div>

      <Player />
    </div>
  );
}

export default App;