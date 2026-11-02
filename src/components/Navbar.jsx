import { ChevronLeft, ChevronRight } from 'lucide-react';

function Navbar() {
  return (
    <header className=" w-full bg-zinc-900/90 backdrop-blur-md py-4 flex flex-col gap-4 font-semibold">
      <div className='flex justify-between items-center w-full'>
        <div className="flex gap-2">

          <button className="w-8 h-8 cursor-pointer rounded-full bg-black/70 flex items-center justify-center text-zinc-400">
            <ChevronLeft />
          </button>

          <button className="w-8 h-8 cursor-pointer rounded-full bg-black/70 flex items-center justify-center text-zinc-400 ">
            <ChevronRight />
          </button>
      </div>

      <div className="flex gap-2 items-center">
        <button className="h-8 cursor-pointer text-[15px] px-4 py-1 rounded-2xl hidden md:block text-black font-bold bg-white  hover: hover:scale-105 transition-transform text-sm">
          Seja Premium
        </button>
        <button className="h-8 cursor-pointer bg-black text-[15px] text-white font-bold px-3 py-1 rounded-full hover:scale-105 transition-transform text-sm ">
          Intalar App
        </button>

        <div className='bg-red-600 text-black w-8 h-8 rounded-full flex items-center justify-center'>
          N
        </div>
      </div>
    </div>
      <div className='flex itens-center gap-2 mt-4'>
        <div className='bg-white text-black  px-4 py-1 text-sm rounded-full cursor-pointer'>
          Todos
        </div>
        <div className='bg-black text-white  px-4 py-1 text-sm rounded-full cursor-pointer'>
          Músicas
        </div>
        <div className='bg-black text-white  px-4 py-1 text-sm rounded-full cursor-pointer'>
          Podcasts
        </div>
      </div>
    </header>
  );
}

export default Navbar;