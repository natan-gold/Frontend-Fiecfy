import BarradeProgresso from "./ProgressBar";
let caractere = ">"
function Player () {
    return (
        
        <footer className=" h-20 bg-blacl bolder-t border-zinc-800 px-4 flex items-center justify-center font-bold hover:scale-100 transition-transform">
        <div className="flex items-center gap-3 w-1/3 ">
            <div className="w-14 h-14 bg-zinc-800 rounded">
                <img className="rounded-1xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaN6_F6XeJ6GGV-ge4VrvNUVW17__c6X0QNEkSe90LQQ&s=10" alt="Music" />
            </div>
            <div className="flex flex-col">
               <strong>Old Town Road</strong>
               <span>Lil Nas X</span>
                </div>
            </div>

            <div className="flex items-center justify-center w-1/3 gap-6">
                <button className="w-8 h-8 rounded-full justify-center bg-white text-black hover:scale-105 transition-transform hover:bg-green-400">
                    <i className="bi bi-skip-start-fill"></i>
                </button>

                <button className="w-8 h-8 rounded-full justify-center bg-white text-black hover:scale-105 transition-transform  hover:bg-green-400">
                    <i className="bi bi-pause-fill"></i>
                </button>

                <button className="w-8 h-8 rounded-full justify-center bg-white text-black hover:scale-105 transition-transform  hover:bg-green-400">
                     <i className="bi bi-skip-end-fill"></i>
                </button>
            </div>

            <div className="flex items-center justify-end w-1/3">
            
                 <BarradeProgresso/>

            </div>
            
        </footer>
    );
}

export default Player