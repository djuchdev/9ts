import React from 'react';

function TestApp() {
  let audio = new Audio("/assets/1.mp3") // this assumes the file will be at the root of the 'public' folder

  const start = () => {
    audio.play()
  }

  return (
    < div >
      <button onClick={start}>Play</button>
    </div >
  );
}

export default TestApp;







  // const playSong = (song) => {
  //   console.log(audioRef.current.paused);
  //   console.log(song);
  //    if (isPlaying) {
  //   audioRef.current.pause();
  //   setIsPlaying(false);
  // } else {
  //   audioRef.current.play();
  //   setIsPlaying(true);
  // }
  //   if (song.id) {
  //     // Update the fileUrl property of the song object
  //     audioRef.current.load();
  //     song.fileUrl = '/assets/' + song.id + '.mp3';
  //   }
  //   // audioRef.current.src = song.fileUrl;
  //   audioRef.current.play();
  //   setIsPlaying(true);
  //   setCurrentSong(song);
  //   console.log('play button pressed')
  //   console.log(audioRef.current);



    // const playButtonClicked = (song) => {
    //   if (song.fileUrl) {
    //     playSong(song);
    //   } else {
    //     console.log('Error: song.fileUrl is not set or is not a valid URL');
    //   }
    // };
    // if (song.fileUrl) {
    //   playButtonClicked(song);
    // } else {
    //   console.log('Error: song.fileUrl is not set or is not a valid URL');
    // }
  // };
  
 
    





  // const playSong = (song) => {
  //   try {
  //     setCurrentSong(song);
  //     audioRef.current.src = song.fileUrl;
  //     audioRef.current.load();
  //     audioRef.current.play();
  //     setIsPlaying(true);
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   console.log('play button pressed')
  // };
  


  


  // const playSong = (song) => {

  //   audioRef.current.play();
  //   setIsPlaying(true);
  // //   setCurrentSong(song);

  //   try {
  //     setCurrentSong(song);
  //     audioRef.current.src = song.fileUrl;
      // audioRef.current.load();
   
  
      // // Add a 'play' event listener to the audio element
      // audioRef.current.addEventListener('play', () => {
      //   setIsPlaying(true);
      // });
  
      // // Add a 'pause' event listener to the audio element
      // audioRef.current.addEventListener('pause', () => {
      //   setIsPlaying(false);
      // });
  
      // if (audioRef.current.paused) {
      //   // Play the audio file if it is paused
      //   audioRef.current.play();
      // } else {
      //   // Pause the audio file if it is not paused
      //   audioRef.current.pause();
      // }
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   console.log('play button pressed')
  // };


  
  // useEffect(() => {
  //   audioRef.current.src = currentSong.fileUrl;
  // }, [currentSong]);



    // Modify the playSong function to set the src attribute of the audio element
  // and call the audio.play() method

  // const playSong = (song) => {

  //   audioRef.current.play();
  //   setIsPlaying(true);
  //   setCurrentSong(song);

  //         // Add a 'play' event listener to the audio element
  //     audioRef.current.addEventListener('play', () => {
  //       setIsPlaying(true);
  //     });
  
  //     // Add a 'pause' event listener to the audio element
  //     audioRef.current.addEventListener('pause', () => {
  //       setIsPlaying(false);
  //     });

    

  // }


// const playSong = (event) => {
//   if (isPlaying) {
//     audioRef.current.pause();
//     setIsPlaying(false);
//   } else {
//     audioRef.current.play();
//     setIsPlaying(true);
//   }
// };