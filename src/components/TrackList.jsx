import { useMusicPlayer } from "../hooks/useMusicPlayer";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Pause from "@mui/icons-material/Pause";
import "bootstrap/dist/css/bootstrap.min.css";

const TrackList = () => {
  const music = useMusicPlayer();

  return (
    <div className="container mt-4">
      <div className="list-group">
        {music.trackList.map((track, index) => (
          <div
            key={`${track}-${index}`}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              music.isPlaying && music.currentTrackIndex === index
                ? "active"
                : ""
            }`}
          >
            <span>{track.name}</span>

            <button
              className="btn btn-outline-primary"
              onClick={() => music.playTrack(index)}
            >
              {music.isPlaying && music.currentTrackIndex === index ? (
                <Pause />
              ) : (
                <PlayArrow />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { TrackList };
