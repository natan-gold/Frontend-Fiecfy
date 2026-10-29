import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

import PlaylistCard from './components/PlaylistCard';
import Navbar from './components/Navbar';
import mockData from "./data/mockData"

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
    <div className='flex flex-col bg-black h-screen text-white'>

      <div className='flex flex-1 overflow-hidden'>

        {/* Barra lateral fixa */}
        <Sidebar />
        <div className='flex flex-col '>
        </div>

        <main className="flex-1 bg-zinc-900 rounded-lg m-2 p-6 overflow-y-auto">
          <Navbar />
          <h1 className="text-2xl font-bold mb-6">Boa tarde, Natan</h1>

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