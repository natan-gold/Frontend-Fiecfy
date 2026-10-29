import ProgressBar from "./ProgressBar";        

import { useState } from "react";

import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

function Player() {

    // let caracterMenor = SkipBack>
    // let caracterMaior = SkipForward

    const [isPlaying, steIsPlaying] = useState(false)

    function togglePlay() {

        steIsPlaying(!isPlaying);
    }

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
            <div className="bg-amber-300/0 w-full flex justify-center items-center flex-col gap-3 ">
                <div className="flex items-center justify-center w-1/2 gap-2">
                    <button className="group w-8 h-8 rounded-full justify-center text-white hover:scale-105 transition-transform hover:text-green-400">
                        <SkipBack
                            fill="white"
                            className="w-5 group-hover:fill-green-400"
                        />
                    </button>

                    <button className=" flex items-center w-8 h-8 mr-2 rounded-full justify-center bg-white text-black hover:scale-105 transition-transform  hover:bg-green-400"
                        onClick={togglePlay}>
                        {isPlaying ? <Play fill="black" className="w-4" /> : <Pause fill="black" className="w-4" />}
                    </button>

                    <button className="group w-8 h-8 rounded-full justify-center text-white hover:scale-105 transition-transform hover:text-green-400">
                        <SkipForward
                            fill="white"
                            className="w-5 group-hover:fill-green-400"
                        />
                    </button>
                </div>

                <div className="flex items-center justify-end w-1/2">
                    <ProgressBar />
                </div>
            </div>

            <div>
                Aqui vai estar o controle de volume!
            </div>

        </footer>
    );
}

export default Player