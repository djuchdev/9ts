import React, { useState, useRef, useEffect } from 'react';
import "./MusicApp.css"
import '@fortawesome/fontawesome-free/css/all.css';

const MusicApp = () => {
  // Add an audioRef state variable to store a reference to the audio element
  const audioRef = useRef(null);
  const [songs, setSongs] = useState([
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
  ]);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  

  // Modify the playSong function to set the src attribute of the audio element
  // and call the audio.play() method
  const playSong = (song) => {
    try {
      setCurrentSong(song);
      audioRef.current.src = song.fileUrl;
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error(error);
    }
  }

  // Modify the pauseSong function to call the audio.pause() method
  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
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

  const formatTime = (timeInSeconds) => {
    // Format the time as mm:ss
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds}`;
  }
  
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
    });
    audioRef.current.addEventListener('error', () => {
      console.error('An error occurred while trying to play the audio file');
    });
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
          <p id="countInfo">{formatTime(elapsedTime)}</p>
          <div><progress id="myProgressBar" value={elapsedTime} /></div>
          {/* max={audioRef.current.duration} */}
        
        </div>
      )}
      <div>
    {/* Display the elapsed time */}
    
  </div>
      {/* Show the "previous", "play/pause", and "next" buttons always */}
      <div className="playback-buttons">
      <button onClick={playPreviousSong}><i className="fas fa-backward"></i></button>
          <button onClick={isPlaying ? pauseSong : playSong}><i className={isPlaying ? 'fas fa-pause' : 'fas fa-play'}></i></button>
          <button onClick={playNextSong}><i className="fas fa-forward"></i></button>
          </div>
          <div>
          <audio ref={audioRef} src={currentSong.fileUrl}></audio>
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


