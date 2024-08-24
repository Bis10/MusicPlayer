import { useState } from 'react'
import './App.css'
import { TrackList } from './components/TrackList';
import { PlayerControls } from './components/PlayerControls';
import { MusicContext } from './contexts/MusicContext';
import sinister from "./assets/sinister.mp3";
import stomp from "./assets/stomp.mp3";
import underwater from "./assets/underwater.mp3";

function App() {
const [state, setState] = useState(
  {
    audioPlayer: new Audio(),
    currentTrackIndex:0,
    isPlaying:false,
    tracks : [
      {
        name:'Sinister Music...',
        file: sinister,
      },
      {
        name:'Stomp Music...',
        file: stomp,
      },
      {
        name:'Underwater Music...',
        file: underwater,
      },
    ],
  });

  return (
    <MusicContext.Provider value={[state, setState]}>
      <div>
        <TrackList />
        <PlayerControls />
      </div>
    </MusicContext.Provider>
  );
};

export default App;
