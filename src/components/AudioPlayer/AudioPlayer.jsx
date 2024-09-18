import { useRef, useCallback } from "react";
import { useWavesurfer } from "@wavesurfer/react";

export const AudioPlayer = ({ url, label }) => {
    const containerRef = useRef(null);
    const { wavesurfer, isPlaying } = useWavesurfer({
      container: containerRef,
      height: 100,
      waveColor: "rgb(60, 130, 116)",
      progressColor: "rgb(31, 74, 65)",
      url: url,
    });
  
    const onPlayPause = useCallback(() => {
      wavesurfer && wavesurfer.playPause();
    }, [wavesurfer]);
  
    return (
      <div ref={containerRef}>
        <div style={{ display: "flex", gap: "1em", justifyContent: "center" }}>
          <button
            onClick={onPlayPause}
            className="cursor-pointer inline-block rounded bg-[#489c8c] px-6 pb-2 pt-2.5 font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          >
            {isPlaying ? "Pausa el Audio" : label}
            <i
              className={`fa-solid ms-3 ${
                isPlaying ? "fa-circle-pause text-lg" : "fa-volume-high"
              }`}
            ></i>
          </button>
        </div>
      </div>
    );
  };