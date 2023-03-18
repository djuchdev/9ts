import React, { useState, useRef, useEffect } from 'react';
import "./MusicApp.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';

// import ProgressBar from '../progress_bar/ProgressBar';

const songs = [
  {
    id: 1,
    name: 'High Energy MidDay Mix',
    artist: 'DJ Uch',
    duration: '26:55',
    // Add a fileUrl property to specify the URL of the audio file
    fileUrl: '/assets/1.mp3',
    artworkUrl: '/assets/1.png'
  },
  {
    id: 2,
    name: 'Workout Volume 1',
    artist: 'DJ Passion',
    duration: '27:12',
    fileUrl: '/assets/2.mp3',
    artworkUrl: '/assets/2.png'
  },
  {
    id: 3,
    name: 'Vibes All Day (Classics)',
    artist: 'DJ Bryan Ferry',
    duration: '29:35',
    fileUrl: '/assets/3.mp3',
    artworkUrl: '/assets/3.png'
  },
  {
    id: 4,
    name: 'Saturday House Party',
    artist: 'MixMaster Casey',
    duration: '28:43',
    fileUrl: '/assets/4.mp3',
    artworkUrl: '/assets/4.png'
  },
  {
    id: 5,
    name: 'Reggae Fire Mix',
    artist: 'DJ UCH',
    duration: '58:51',
    fileUrl: '/assets/5.mp3',
    artworkUrl: '/assets/5.png'
  },
  {
    id: 6,
    name: 'Pump It Up Radio - Mix 1',
    artist: 'DJ UCH',
    duration: '28:37',
    fileUrl: '/assets/6.mp3',
    artworkUrl: '/assets/6.png'
  },
  {
    id: 7,
    name: 'Pump It Up Radio - Mix 2',
    artist: 'DJ UCH',
    duration: '29:08',
    fileUrl: '/assets/7.mp3',
    artworkUrl: '/assets/7.png'
  }
];
function getSongById(id) {
  return songs.find(song => song.id === id)
}
function getSongIndex(id) {
  const currentSong = getSongById(id)
  return songs.findIndex(song => song.id === currentSong.id)
}

function getNextSong(id) {
  // if last song, return first song
  const currentIndex = getSongIndex(id)
  const nextIndex = currentIndex + 1
  const isLastSong = nextIndex === songs.length
  const nextSong = songs[isLastSong ? 0 : nextIndex]
  return nextSong;
}
function getPrevSong(id) {
  const currentIndex = getSongIndex(id)
  const prevIndex = currentIndex - 1
  const isFirstSong = prevIndex < 0
  const prevSong = songs[isFirstSong ? 0 : prevIndex]
  return prevSong;
}
function PlayPauseButton({
  isPlaying,
  pauseSong,
  playSong
}) {
  return (
    <FontAwesomeIcon
      onClick={isPlaying ? pauseSong : playSong}
      icon={isPlaying ? faPauseCircle : faPlayCircle}
      size="3x"
      className={isPlaying ? 'fa-pause-circle' : 'fa-play-circle'}
    />
  )
}
function PlayPreviousButton({ playPreviousSong }) {
  return (
    <FontAwesomeIcon
      onClick={playPreviousSong}
      icon={faStepBackward}
      size="3x"
      className="fa-backward"
    />
  )
}
function PlayNextButton({ playNextSong }) {
  return (
    <FontAwesomeIcon
      onClick={playNextSong}
      icon={faStepForward}
      size="3x"
      className="fa-step-forward"
    />

  )
}
const MusicApp = () => {
  // Add an audioRef state variable to store a reference to the audio element
  const audioRef = useRef(null);

  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [timelineInterval, setTimelineInterval] = useState(); // the interval that updates the song timeline
  const didLoad = useRef(0);

  // You can use a similar approach to display the remaining time 
  // of the audio by subtracting the elapsed time from the duration of the audio.

  // PROGRESS BAR

  function onloadedmetadata(player) {
    setTotalDuration(player.duration)
  }
  useEffect(() => {
    let interval;
    function ended() {
      // Clear the interval when the song ends
      clearInterval(interval);
    }
    function canPlayThrough() {
      // The audio element is ready to play, so you can call the play() method
      // audioRef.current.play();
      // setIsPlaying(true);
    }
    function error() {
      console.error('An error occurred while trying to play the audio file');
    }
    function pause() {
      setIsPlaying(false)
    }
    function addEventListeners(audio) {
      const fns = {
        ended,
        canplaythrough: canPlayThrough,
        error,
        pause
      }
      Object.entries(fns).forEach(([eventName, handler]) => {
        audio.addEventListener(eventName, handler);
      })
    }
    const audio = audioRef.current

    if (audio) {
      // TODO: should this be an event listener?
      // audio.onloadedmetadata = onloadedmetadata(audio)

      audioRef.current.onloadedmetadata = () => onloadedmetadata(audioRef.current)
      // interval = setInterval(() => {
      //   // Update the elapsed time as the song is playing
      //   setElapsedTime(audioRef.current.currentTime);
      // }, 1000);
      addEventListeners(audio)
    }


    return () => {
      // Clear the interval when the component unmounts
      clearInterval(timelineInterval);
    };
  }, [audioRef, timelineInterval]);

  useEffect(() => {
    if (didLoad.current < 2) {
      didLoad.current++;
    } else {
      playSong();
    }
  }, [currentSong])
  const playSong = () => {
    setIsPlaying(true);
    setTimelineInterval(setInterval(() => setElapsedTime(audioRef.current.currentTime), 120));
    audioRef.current.play();
  };
  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  }
  const playPreviousSong = () => {
    setCurrentSong((prevCurrentSong) => getPrevSong(prevCurrentSong.id))
  }
  const playNextSong = () => {
    setCurrentSong((prevCurrentSong) => getNextSong(prevCurrentSong.id))
  }

  // TIME CODE
  const formatTime = (elapsedTime, totalDuration) => {
    // Calculate the time remaining in seconds


    // Format the time as mm:ss
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = Math.floor(elapsedTime % 60);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  const formattedElapsedTime = formatTime(elapsedTime, 0);
  const timeRemaining = totalDuration - elapsedTime;
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = Math.floor(timeRemaining % 60);
  const formattedTimeRemaining = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div>
      <div className="music-main-container">
        <div className="music-main-block">
          <div className="music-main-header-logo">
            <p className="music-main-text-header">Nonstop DJ Mixes</p>
            <p className="music-main-text-header-2">for you</p>
          </div>
          <div className="music-main-block-2">
            {currentSong && (
              <div className="song-info">
                <img className="artwork" src={currentSong.artworkUrl} alt={currentSong.name} />
                <p id="masterSongName">{currentSong.name} - {currentSong.artist}</p>


                <div id="countInfo">
                  <span className="time-code" id="duration" style={{ float: 'left' }}>{formattedElapsedTime}</span>
                  <span className="time-code" id="timeleft" style={{ float: "right" }}>{formattedTimeRemaining}</span>
                </div>

                <div>
                  <input
                    value={elapsedTime}
                    max={totalDuration}
                    type="range"
                    name="range"
                    id="myProgressBar"
                    min="0"
                    onChange={e => {
                      const { value } = e.currentTarget;
                      const secondsPlayed = Number(value);
                      setElapsedTime(secondsPlayed)
                      audioRef.current.currentTime = secondsPlayed;
                    }}
                  />
                </div>
              </div>
            )}
            <div>
              {/* Display the elapsed time */}

            </div>
            {/* Show the "previous", "play/pause", and "next" buttons always */}
            <div className="playback-buttons">
              <PlayPreviousButton playPreviousSong={playPreviousSong} />
              <PlayPauseButton
                isPlaying={isPlaying}
                playSong={playSong}
                pauseSong={pauseSong}
              />
              <PlayNextButton playNextSong={playNextSong} />
            </div>
            <div>
              <audio
                ref={audioRef}
                src={currentSong.fileUrl}
              >
                <source src="/assets/song.mp3" type="audio/mpeg" />
                <source src="/assets/song.ogg" type="audio/ogg" />
                <p>Your browser does not support the audio element</p>
              </audio>
            </div>
          </div>
        </div>
        <div className="">
          <input type="search" name="music-main-search-bar" className="music-main-search" placeholder="Your Old School Mixes"></input>
        </div>



      </div>

    </div>

  );
}

export default MusicApp;


