import { useEffect, useRef, useState } from "react";
import tracks from "../data/tracks";
import ProgressBar from "./ProgressBar";

import {
  Play, Pause, SkipBack, SkipForward, Menu, MonitorSpeaker,
  Volume2, Maximize2, MicVocal, SquarePlay, Shuffle, Repeat,
} from "lucide-react";

function Player() {
  // 1) A REFERÊNCIA: caixa que vai guardar o <audio> REAL do DOM
  const audioRef = useRef(null);
  // (extra) caixa para lembrar "toque a próxima faixa" sem causar re-render
  const shouldAutoplay = useRef(false);

  // 2) OS ESTADOS: o que a TELA mostra
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const track = tracks[trackIndex];

  // 3) CONTROLE IMPERATIVO: mandamos o <audio> tocar/pausar
  async function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play(); // play() devolve uma Promise e pode ser recusado
      } catch (err) {
        console.error("Não foi possível tocar:", err);
      }
    } else {
      audio.pause();
    }
    // Repare: NÃO damos setIsPlaying aqui. Os eventos onPlay/onPause (no <audio>) fazem isso.
  }

  // (extra) trocar de faixa
  function goTo(index, autoplay) {
    shouldAutoplay.current = autoplay;
    setCurrentTime(0);
    setDuration(0);
    setTrackIndex((index + tracks.length) % tracks.length);
  }
  const next = () => goTo(trackIndex + 1, isPlaying);
  const prev = () => goTo(trackIndex - 1, isPlaying);

  // quando a faixa muda, o <audio> recarrega e para: se estava tocando, tocamos de novo
  useEffect(() => {
    if (shouldAutoplay.current) {
      audioRef.current?.play().catch(() => {});
    }
  }, [trackIndex]);

  // (extra) pular para um ponto da música
  function seek(seconds) {
    audioRef.current.currentTime = seconds;
    setCurrentTime(seconds);
  }

  // (extra) volume: a propriedade volume vai de 0 a 1
  function changeVolume(e) {
    const v = Number(e.target.value);
    audioRef.current.volume = v;
    setVolume(v);
  }

  // (extra surpresa) teclas de mídia do teclado e painel do sistema
  useEffect(() => {
    if (!("mediaSession" in navigator)) return;
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: track.artist,
      artwork: [{ src: track.coverUrl }],
    });
    navigator.mediaSession.setActionHandler("play", () => audioRef.current.play());
    navigator.mediaSession.setActionHandler("pause", () => audioRef.current.pause());
    navigator.mediaSession.setActionHandler("nexttrack", next);
    navigator.mediaSession.setActionHandler("previoustrack", prev);
  }, [trackIndex, isPlaying]);

  return (
    <footer className="h-20 bg-black border-t border-zinc-800 px-4 flex items-center justify-center font-bold">
      {/* O elemento de áudio: não aparece na tela (não tem "controls"), só toca */}
      <audio
        ref={audioRef}
        src={track.audioUrl}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => goTo(trackIndex + 1, true)}
        onError={(e) => {
        console.error("Erro ao carregar o áudio:", e.currentTarget.error);
        console.error("Arquivo solicitado:", e.currentTarget.currentSrc);
        }}
      />

      <div className="flex items-center gap-3 w-1/3">
        <div className="w-14 h-14 bg-zinc-800 rounded">
          <img className="rounded" src={track.coverUrl} alt={track.title} />
        </div>
        <div className="flex flex-col">
          <strong>{track.title}</strong>
          <span>{track.artist}</span>
        </div>
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-3">
        <div className="flex items-center justify-center w-1/2 gap-2">
          <button className="group cursor-pointer w-8 h-8 rounded-full justify-center text-white hover:scale-105 transition-transform hover:text-green-400">
            <Shuffle fill="white" className="w-5 group-hover:fill-green-400" />
          </button>
          <button onClick={prev} className="group cursor-pointer w-8 h-8 rounded-full justify-center text-white hover:scale-105 transition-transform hover:text-green-400">
            <SkipBack fill="white" className="w-5 group-hover:fill-green-400" />
          </button>

          {/* O ícone SEGUE o estado: tocando -> mostra Pause; pausado -> mostra Play */}
          <button
            className="flex cursor-pointer items-center w-8 h-8 mr-2 rounded-full justify-center bg-white text-black hover:scale-105 transition-transform hover:bg-green-400"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause fill="black" className="w-4" /> : <Play fill="black" className="w-4" />}
          </button>

          <button onClick={next} className="group cursor-pointer w-8 h-8 rounded-full justify-center text-white hover:scale-105 transition-transform hover:text-green-400">
            <SkipForward fill="white" className="w-5 group-hover:fill-green-400" />
          </button>
          <button className="group cursor-pointer w-8 h-8 rounded-full justify-center text-white hover:scale-105 transition-transform hover:text-green-400">
            <Repeat fill="white" className="w-5 group-hover:fill-green-400" />
          </button>
        </div>

        <div className="flex items-center justify-end w-1/2">
          <ProgressBar currentTime={currentTime} duration={duration} onSeek={seek} />
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center gap-2 opacity-75">
        <SquarePlay />
        <MicVocal />
        <Menu />
        <MonitorSpeaker />
        <Volume2 />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={changeVolume}
          className="w-20 accent-green-500 cursor-pointer"
        />
        <Maximize2 />
      </div>
    </footer>
  );
}

export default Player;
