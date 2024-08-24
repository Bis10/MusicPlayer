import PlayArrow  from "@mui/icons-material/PlayArrow";
import Pause from "@mui/icons-material/Pause";
import { useMusicPlayer } from "../hooks/useMusicPlayer";
import { SkipPrevious } from "@mui/icons-material";
const PlayerControls = () => {
  const music = useMusicPlayer();
  return (
    <>
      <div>
        <p>Now Playing: {music.currentTrackName}</p>
      </div>
      <button onClick={music.playPreviousTrack}><SkipPrevious/></button>
      <button onClick={music.togglePlay}>
        {music.isPlaying ? <Pause/> : <PlayArrow/>}
      </button>
      <button onClick={music.playNextTrack}>Next</button>
    </>
  );
};
export { PlayerControls };
