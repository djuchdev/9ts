import React, { useState } from 'react';

const MusicDebug = () => {
  // Initialize state for the music player
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSong, setCurrentSong] = useState(0);

  // Define an array of songs
  const songs = [ {
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
  }     ];

  // Load the current song
  const audioElement = new Audio(songs[currentSong].fileUrl);

  // Function to play the music
  const playMusic = () => {
    audioElement.play();
    setIsPlaying(true);
  };

  // Function to pause the music
  const pauseMusic = () => {
    audioElement.pause();
    setIsPlaying(false);
    console.log('Pause button clicked');
  };
  

  // Function to stop the music
  const stopMusic = () => {
    audioElement.pause();
    audioElement.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // Function to play the next song in the playlist
  const playNextSong = () => {
   
    // Increment the current song index
    setCurrentSong((currentSong + 1) % songs.length);
    // Load the next song
    audioElement.src = songs[currentSong].fileUrl;
    // Play the next song
    playMusic();
     // Stop the current song
     stopMusic();
  };

  // Function to play the previous song in the playlist
  const playPreviousSong = () => {
    // Stop the current song
    stopMusic();
    // Decrement the current song index
    setCurrentSong((currentSong + songs.length - 1) % songs.length);
    // Load the previous song
    audioElement.src = songs[currentSong].fileUrl;
    // Play the previous song
    playMusic();
  };

  // Update the current time and duration state variables when the audio element updates
  audioElement.addEventListener('timeupdate', () => {
    setCurrentTime(audioElement.currentTime);
    setDuration(audioElement.duration);
  });

  // When the current song ends, play the next song
  audioElement.addEventListener('ended', playNextSong);

  return (
    <div>
      {/* Display the current time, duration, and song title */}
      <p>
        {currentTime} / {duration} - {songs[currentSong].name}
      </p>
      {/* Render the play, pause, skip to next, and skip to previous buttons */}
      {isPlaying ? (
        <button onClick={pauseMusic}>Pause</button>
      ) : (
        <button onClick={playMusic}>Play</button>
      )}
           <button onClick={stopMusic}>Stop</button>
      <button onClick={playNextSong}>Next</button>
      <button onClick={playPreviousSong}>Previous</button>
    </div>
  );
};

export default MusicDebug;

