import { useMusicPlayer } from "../hooks/useMusicPlayer";

const TrackList = ()=>{
    const music = useMusicPlayer();


return(
    <>
    {music.trackList.map((track, index)=>(
        <div key={`${track}-${index}`}>
            <button onClick={()=> music.playTrack(index)}>
                {music.isPlaying && music.currentTrackIndex === index ? "Pause": "Play"}
            </button>
            <div>{track.name}</div>
        </div>
    ))}
    </>
);
};
export {TrackList};