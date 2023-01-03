import React, { useState, useRef, useEffect } from 'react';
import "./MusicApp.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';

// import ProgressBar from '../progress_bar/ProgressBar';


const MusicApp = () => {
  // Add an audioRef state variable to store a reference to the audio element
  const audioRef = useRef(null);
  const songs = [
    {
      id: 1,
      name: 'High Energy MidDay Mix',
      artist: 'DJ Avery',
      duration: '3:45',
      // Add a fileUrl property to specify the URL of the audio file
      fileUrl: '/assets/1.mp3',
      artworkUrl: '/assets/1.png'
    },
    {
      id: 2,
      name: 'Workout Volume 1',
      artist: 'DJ Passion',
      duration: '4:20',
      fileUrl: '/assets/2.mp3',
      artworkUrl: '/assets/2.png'
    },
    {
      id: 3,
      name: 'Vibes All Day (Classics)',
      artist: 'DJ Bryan Ferry',
      duration: '3:15',
      fileUrl: '/assets/3.mp3',
      artworkUrl: '/assets/3.png'
    }, 
    {
      id: 4,
      name: 'Saturday House Party',
      artist: 'MixMaster Casey',
      duration: '3:15',
      fileUrl: '/assets/4.mp3',
      artworkUrl: '/assets/4.png'
    }
  ];
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  



const playSong = (song) => {
  audioRef.current.play();
  setCurrentSong(song);
};

  

  if (audioRef.current === null) {
    console.log('audioRef.current is null');
  }
  

  // Modify the pauseSong function to call the audio.pause() method
  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    console.log('pause button pressed')
  }

  // Add a function to play the previous song
  const playPreviousSong = () => {
    if (currentSong) {
      const currentIndex = songs.findIndex(song => song.id === currentSong.id);
      if (currentIndex > 0) {
        playSong(songs[currentIndex - 1]);
      }
    }
  }

  // Add a function to play the next song
  const playNextSong = () => {
    if (currentSong) {
      const currentIndex = songs.findIndex(song => song.id === currentSong.id);
      if (currentIndex < songs.length - 1) {
        playSong(songs[currentIndex + 1]);
      }
    }
  }


  

    // TIME CODE

 let formatTime = (elapsedTime, totalDuration) => {
  // Calculate the time remaining in seconds


  // Format the time as mm:ss
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = Math.floor(elapsedTime % 60);

  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

const [totalDuration, setTotalDuration] = useState(0);

const formattedElapsedTime = formatTime(elapsedTime, 0);

const timeRemaining = totalDuration - elapsedTime;
const minutes = Math.floor(timeRemaining / 60);
const seconds = Math.floor(timeRemaining % 60);
const formattedTimeRemaining = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;





useEffect(() => {
  audioRef.current.onloadedmetadata = () => {
    setTotalDuration(audioRef.current.duration);
  };
}, [audioRef]);



  
  const updateElapsedTime = () => {
    if (audioRef.current) {
      setElapsedTime(audioRef.current.currentTime);
    }
  }

  
  useEffect(() => {
    // Start the interval when the audio is playing
    if (isPlaying) {
      const interval = setInterval(updateElapsedTime, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, audioRef]);

  

  // You can use a similar approach to display the remaining time 
  // of the audio by subtracting the elapsed time from the duration of the audio.


  


  // PROGRESS BAR

  useEffect(() => {
    // Update the elapsed time as the song is playing
    const interval = setInterval(() => {
      setElapsedTime(audioRef.current.currentTime);
    }, 1000);

    // Clear the interval when the song ends
    audioRef.current.addEventListener('ended', () => {
      clearInterval(interval);
    });

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, audioRef]);

  



  
  useEffect(() => {
    // Add the canplaythrough event listener
    audioRef.current.addEventListener('canplaythrough', () => {
      // The audio element is ready to play, so you can call the play() method
      audioRef.current.play();
      setIsPlaying(true);
  
    });
    audioRef.current.addEventListener('error', () => {
      console.error('An error occurred while trying to play the audio file');
    });
  }, [audioRef]);


  useEffect(() => {
  audioRef.current.addEventListener('pause', () => setIsPlaying(false));
}, [audioRef]);

  

  
  


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
     <span className="time-code"  id="duration" style={{float: 'left'}}>{formattedElapsedTime}</span>
     <span className="time-code"  id="timeleft" style={{float: "right"}}>{formattedTimeRemaining}</span> 
  </div>  
  {/* <div className="player-controls" >
      <div className="progress-bar-container">
        <ProgressBar elapsedTime={elapsedTime} duration={currentSong.duration} audioRef={audioRef} />
      </div>
    </div> */}


          <div>
          <input value={elapsedTime} max={totalDuration} type="range" name="range" id="myProgressBar" min="0"></input>

            </div>
        
        </div>
      )}
      <div>
    {/* Display the elapsed time */}
    
  </div>
      {/* Show the "previous", "play/pause", and "next" buttons always */}
      <div className="playback-buttons">
        <FontAwesomeIcon onClick={playPreviousSong} icon={faStepBackward} size="3x" className="fa-backward" />
        <FontAwesomeIcon onClick={isPlaying ? pauseSong : playSong} icon={isPlaying ? faPauseCircle : faPlayCircle} size="3x" className={isPlaying ? 'fa-pause-circle' : 'fa-play-circle'}  />
        <FontAwesomeIcon onClick={playNextSong} icon={faStepForward} size="3x" className="fa-step-forward" />
        {/* <FontAwesomeIcon onClick={() => isPlaying ? pauseSong : playSong()} icon={isPlaying ? faPauseCircle : faPlayCircle} size="3x" className={isPlaying ? 'fa-pause-circle' : 'fa-play-circle'}  /> */}
        {/* <FontAwesomeIcon onClick={playSong} icon={isPlaying ? faPauseCircle : faPlayCircle} size="3x" className={isPlaying ? 'fa-pause-circle' : 'fa-play-circle'}  /> */}
                {/* <FontAwesomeIcon onClick={isPlaying ? pauseSong : playSong} icon={isPlaying ? faPauseCircle : faPlayCircle} size="3x" className={isPlaying ? 'fa-pause-circle' : 'fa-play-circle'}  /> */}
        {/* className="fa-play-circle" */}



  
  
         
          </div>
          <div>
          <audio ref={audioRef} src={currentSong.fileUrl}>
          <source src="/assets/song.mp3" type="audio/mpeg" />
          <source src="/assets/song.ogg" type="audio/ogg" />
          <p>Your browser does not support the audio element.</p>
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


