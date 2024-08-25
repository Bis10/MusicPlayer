import PlayArrow from "@mui/icons-material/PlayArrow";
import Pause from "@mui/icons-material/Pause";
import { useMusicPlayer } from "../hooks/useMusicPlayer";
import { SkipPrevious } from "@mui/icons-material";
import { SkipNext } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";

const PlayerControls = () => {
  const music = useMusicPlayer();

  return (
    <div className="container mt-3 text-center">
      <div className="mb-2">
        <p className="font-weight-bold">
          Now Playing: {music.currentTrackName || "No track selected"}
        </p>
      </div>
      <div className="btn-group">
        <button
          className="btn btn-outline-secondary"
          onClick={music.playPreviousTrack}
        >
          <SkipPrevious />
        </button>
        <button className="btn btn-outline-primary" onClick={music.togglePlay}>
          {music.isPlaying ? <Pause /> : <PlayArrow />}
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={music.playNextTrack}
        >
          <SkipNext />
        </button>
      </div>
    </div>
  );
};

export { PlayerControls };
