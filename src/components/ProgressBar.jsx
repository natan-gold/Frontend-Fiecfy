import { useRef } from "react";

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function ProgressBar({ currentTime, duration, onSeek }) {
  // 2º uso do useRef: medir a barra real no DOM para saber onde o usuário clicou
  const barRef = useRef(null);
  const percent = duration ? (currentTime / duration) * 100 : 0;

  function handleClick(e) {
    if (!duration) return; // duration é NaN/0 até o áudio carregar
    const rect = barRef.current.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width; // 0 a 1
    onSeek(ratio * duration);
  }

  return (
    <div className="flex flex-row w-full items-center justify-center gap-2">
      <p>{formatTime(currentTime)}</p>
      <div
        ref={barRef}
        onClick={handleClick}
        className="group w-full bg-zinc-800 h-1 hover:h-3 rounded-full flex items-center cursor-pointer transition-all duration-200"
        style={{
          backgroundImage: `linear-gradient(to right, white ${percent}%, grey ${percent}%)`,
        }}
      />
      <p>{formatTime(duration)}</p>
    </div>
  );
}

export default ProgressBar;
