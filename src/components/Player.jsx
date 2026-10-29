import mockData from "../data/mockData";
import ProgressBar from "./ProgressBar";        

import { useState } from "react";

import { Play, Pause, SkipBack, SkipForward, Menu, MonitorSpeaker, Volume2, Maximize2, MicVocal, SquarePlay, Shuffle, Repeat} from 'lucide-react';

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
                    <img className="rounded-1xl" src={mockData[1].coverUrl} alt="Music" />
                </div>
                <div className="flex flex-col">
                    <strong>{mockData[1]. title}</strong>
                    <span>{mockData[1]. description.slice(0,30)}</span>
                </div>
            </div>
            <div className="bg-amber-300/0 w-full flex justify-center items-center flex-col gap-3 ">
                <div className="flex items-center justify-center w-1/2 gap-2">
                   
                   <button className="group cursor-pointer w-8 h-8 rounded-full justify-center text-white hover:scale-105 transition-transform hover:text-green-400">
                        <Shuffle
                            fill="white"
                            className="w-5 group-hover:fill-green-400"/>
                    </button>
                    <button className="group cursor-pointer w-8 h-8 rounded-full justify-center text-white hover:scale-105 transition-transform hover:text-green-400">
                        <SkipBack
                            fill="white"
                            className="w-5 group-hover:fill-green-400"/>
                    </button>
                    <button className=" flex cursor-pointer items-center w-8 h-8 mr-2 rounded-full justify-center bg-white text-black hover:scale-105 transition-transform  hover:bg-green-400"
                        onClick={togglePlay}>
                        {isPlaying ? <Play fill="black" className="w-4" /> : <Pause fill="black" className="w-4" />}
                    </button>
                    <button className="group cursor-pointer w-8 h-8 rounded-full justify-center text-white hover:scale-105 transition-transform hover:text-green-400">
                        <SkipForward
                            fill="white"
                            className="w-5 group-hover:fill-green-400"/>
                    </button>
                    <button className="group cursor-pointer w-8 h-8 rounded-full justify-center text-white hover:scale-105 transition-transform hover:text-green-400">
                        <Repeat
                            fill="white"
                            className="w-5 group-hover:fill-green-400"/>
                    </button>
                </div>

                <div className="flex items-center justify-end w-1/2">
                    <ProgressBar />
                </div>
            </div>

            <div className="hidden lg:flex items-center justify-center gap-2 opacity-75">
                <SquarePlay/>
                <MicVocal/>
                <Menu/>
                <MonitorSpeaker/>
                <Volume2/>
                <div className="w-20 bg-white h-1 rounded-full hover:opacity-125">

                </div>
                <Maximize2/>
            </div>
               
        </footer>
    );
}

export default Player