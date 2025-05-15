import { useRef, useState } from "react";
import musicSrc from "../assets/music/music.mp3";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <audio ref={audioRef} autoPlay loop>
        <source src={musicSrc} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleMusic}
        className="bg-white text-primary p-1 rounded-full shadow-lg hover:bg-primary hover:text-white transition"
      >
        {isPlaying ? (
          <MdMusicNote className="text-xl" />
        ) : (
          <MdMusicOff className="text-xl" />
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
