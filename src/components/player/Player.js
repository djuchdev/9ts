// console.log("Welcome to 9TS");

// // VARIABLES //

// let songIndex = 0;
// let artIndex = 0;
// let audioElement = new Audio('songs/1.mp3');
// let artwork = document.querySelector('artwork');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// let songItems = Array.from(document.getElementsByClassName('songItem'));


// // SONGS //

// let songs = [
//     {songName: "9TS - 80's Electro Mix", filePath: "songs/80s.mp3", coverPath: "dj-avery.png"},
//     {songName: "9TS - Dance Mix", filePath: "songs/dance-1.mp3", coverPath: "girl-dj.png"},
//     {songName: "9TS - Love Dance", filePath: "songs/dance-2.mp3", coverPath: "island-dj.png"},
//     {songName: "9TS - Big Room Vocals", filePath: "songs/dance-3.mp3", coverPath: "listening.png"},
// ]

// let art = [
    
//     {img: "images/1.png"}, 
//     {img: "images/2.png"}, 
//     {img: "images/3.png"}, 
//     {img: "images/4.png"},
// ]


// //ARTWORK CHANGE

// // artwork.addEventListener("click", () =>{


// // })

// // AUDIO CLOCK - COUNTDOWN
// audioElement.addEventListener("timeupdate", function() {
//     var timeleft = document.getElementById('timeleft'),
//         duration = parseInt( audioElement.duration ),
//         currentTime = parseInt( audioElement.currentTime ),
//         timeLeft = duration - currentTime,
//         s, m;
    
//     s = timeLeft % 60;
//     m = Math.floor( timeLeft / 60 ) % 60;
    
//     s = s < 10 ? "0"+s : s;
//     m = m < 10 ? "0"+m : m;
    
//     timeleft.innerHTML = m+":"+s;
    
// }, false);


// // AUDIO CLOCK - COUNTUP
// audioElement.addEventListener("timeupdate", function() {
//     var timeline = document.getElementById('duration');
//     var s = parseInt(audioElement.currentTime % 60);
//     var m = parseInt((audioElement.currentTime / 60) % 60);
//     if (s < 10) {
//         timeline.innerHTML = m + ':0' + s;
//     }
//     else {
//         timeline.innerHTML = m + ':' + s;
//     }
// }, false);



// // PLAY AND PAUSE BUTTON //

// masterPlay.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         // gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         // gif.style.opacity = 0;
//     }

//     // artwork.style.backgroundImage = "url(" + art[artIndex].img + ")";
// })


// // *** PROGRESS BAR *** // 

// myProgressBar.addEventListener('change', ()=>{
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// })



// //*****NEXT BUTTON****//

// document.getElementById('next').addEventListener('click', ()=>{
//     if(songIndex>=9){
//         console.log("song < ")
//         songIndex = 0
//     }
//     else{
//         console.log("song > ")
//         songIndex += 1;
//     }

//     // if (artIndex <=0){
//     //     artIndex = 0
//     // }

//     // else{
//     //     artIndex += 1;
//     // }

//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');

//     // function changeArtUp (){

//     //     artwork.src = art[artIndex].artSource;
//     // }

//     // changeArtUp()
 

// })


// //*****PREVIOUS BUTTON****//

// document.getElementById('previous').addEventListener('click', ()=>{
//     if(songIndex<=0){
//         songIndex = 0
//     }
//     else{
//         songIndex -= 1;
//     }

//     // if (artIndex <=0){
//     //     artIndex = 0
//     // }

//     // else{
//     //     artIndex -= 1;
//     // }

//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');

//     // function changeArtDown (){


//     //     artwork.src = art[artIndex].artSource;
//     // }

//     // changeArtDown()

// })




// //  ****** REACT MUSIC PLAYER *****


// // import React, { useState } from 'react';

// // const MusicApp = () => {
// //   const [songs, setSongs] = useState([
// //     {
// //       id: 1,
// //       name: 'Song 1',
// //       artist: 'Artist 1',
// //       duration: '3:45'
// //     },
// //     {
// //       id: 2,
// //       name: 'Song 2',
// //       artist: 'Artist 2',
// //       duration: '4:20'
// //     },
// //     {
// //       id: 3,
// //       name: 'Song 3',
// //       artist: 'Artist 3',
// //       duration: '3:15'
// //     }
// //   ]);
// //   const [currentSong, setCurrentSong] = useState(null);
// //   const [isPlaying, setIsPlaying] = useState(false);

// //   const playSong = (song) => {
// //     setCurrentSong(song);
// //     setIsPlaying(true);
// //   }

// //   const pauseSong = () => {
// //     setIsPlaying(false);
// //   }

// //   return (
// //     <div>
// //       <h1>Music App</h1>
// //       <ul>
// //         {songs.map(song => (
// //           <li key={song.id}>
// //             <span>{song.name} - {song.artist} ({song.duration})</span>
// //             {currentSong && currentSong.id === song.id && isPlaying ? (
// //               <button onClick={pauseSong}>Pause</button>
// //             ) : (
// //               <button onClick={() => playSong(song)}>Play</button>
// //             )}
// //           </li>
// //         ))}
// //       </ul>
// //       {currentSong && (
// //         <div>
// //           <h2>Now Playing:</h2>
// //           <p>{currentSong.name} - {currentSong.artist}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default MusicApp;




{/* <ul>
{songs.map(song => (
  <li key={song.id}>
    <span>{song.name} - {song.artist} ({song.duration})</span>
    {currentSong && currentSong.id === song.id && isPlaying ? (
      <button onClick={pauseSong}><i className="fas fa-pause"></i></button>
    ) : (
      <button onClick={() => playSong(song)}><i className="fas fa-play"></i></button>
    )}
  </li>
))}
</ul> */}



// CODE FOR MUSICAPP


// import React, { useState, useRef, useEffect } from 'react';
// import "./MusicApp.css"
// import '@fortawesome/fontawesome-free/css/all.css';

// const MusicApp = () => {

//   // Add an audioRef state variable to store a reference to the audio element
//   const audioRef = useRef(null);
//   const [songs, setSongs] = useState([
//     {
//       id: 1,
//       name: 'Song 1',
//       artist: 'Artist 1',
//       duration: '3:45',
//       // Add a fileUrl property to specify the URL of the audio file
//       fileUrl: '/assets/1.mp3'
//     },
//     {
//       id: 2,
//       name: 'Song 2',
//       artist: 'Artist 2',
//       duration: '4:20',
//       fileUrl: '/assets/2.mp3'
//     },
//     {
//       id: 3,
//       name: 'Song 3',
//       artist: 'Artist 3',
//       duration: '3:15',
//       fileUrl: '/assets/3.mp3'
//     }, 
//     {
//       id: 4,
//       name: 'Song 4',
//       artist: 'Artist 4',
//       duration: '3:15',
//       fileUrl: '/assets/4.mp3'
//     }

    
//   ]);
//   const [currentSong, setCurrentSong] = useState(songs[0]);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // Modify the playSong function to set the src attribute of the audio element
//   // and call the audio.play() method
//   const playSong = (song) => {
//     try {
//       setCurrentSong(song);
//       audioRef.current.src = song.fileUrl;
//       audioRef.current.load();
//       audioRef.current.play();
//       setIsPlaying(true);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
  

//   // Modify the pauseSong function to call the audio.pause() method
//   const pauseSong = () => {
//     audioRef.current.pause();
//     setIsPlaying(false);
//   }

//   // Add a function to play the previous song
//   const playPreviousSong = () => {
//     if (currentSong) {
//       const currentIndex = songs.findIndex(song => song.id === currentSong.id);
//       if (currentIndex > 0) {
//         playSong(songs[currentIndex - 1]);
//       }
//     }
//   }

//   // Add a function to play the next song
//   const playNextSong = () => {
//     if (currentSong) {
//       const currentIndex = songs.findIndex(song => song.id === currentSong.id);
//       if (currentIndex < songs.length - 1) {
//         playSong(songs[currentIndex + 1]);
//       }
//     }
//   }


  
//   useEffect(() => {
//     audioRef.current.addEventListener('canplaythrough', () => {
//       audioRef.current.play();
//     });
//     audioRef.current.addEventListener('error', () => {
//       console.error('An error occurred while trying to play the audio file');
//     });
//   }, [audioRef]);
  
  


//   return (
//     <div>
//       <h1>Music App</h1>
   
//       {currentSong && (
//         <div>
//           <p>{currentSong.name} - {currentSong.artist}</p>
//         </div>
//       )}
//       {/* Show the "previous", "play/pause", and "next" buttons always */}
//       <button onClick={playPreviousSong}><i className="fas fa-backward"></i></button>
//           <button onClick={isPlaying ? pauseSong : playSong}><i className={isPlaying ? 'fas fa-pause' : 'fas fa-play'}></i></button>
//           <button onClick={playNextSong}><i className="fas fa-forward"></i></button>
//           <div>
//           <audio ref={audioRef} src={currentSong.fileUrl}></audio>

//           </div>
//     </div>
    
//   );
// }

// export default MusicApp;





// MUSIC MAIN PAGE 


// <div className="music-main-image">
// <img className="artwork" src="../assets/1.png" alt="music artwork"></img>
// <div className="songInfo">
//     <span id="masterSongName">9TS - 80's Electro Mix</span>
// </div>
// <div id="countInfo">
//     <span id="duration" style={{float: 'left'}}></span>
//     <span id="timeleft" style={{float: "right"}}></span> 
//  </div>  
// <div className="music-main-playback">
//     <input type="range" name="range" id="myProgressBar" min="0" value="0" max="100"></input></div>
//     <div className="icons">
 
//        <FontAwesomeIcon icon={faStepBackward} size="3x" type="button" id="previous" className="fas fa-3x fa-step-backward" />
//        <FontAwesomeIcon icon={faPlayCircle} size="3x" type="button" id="masterPlay" className="far fa-3x fa-play-circle" />
//        <FontAwesomeIcon icon={faStepForward} size="3x" type="button" id="next" className="fas fa-3x fa-step-forward" />
//         {/* <i className="fas fa-3x fa-step-backward" type="button" id="previous"></i>
//         <i className="far fa-3x fa-play-circle" type="button" id="masterPlay"></i>
//         <i className="fas fa-3x fa-step-forward" type="button" id="next"></i>  */}
//     </div>
// </div>






// import Player from "../../components/player/Player";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
// import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
// import { faStepForward } from '@fortawesome/free-solid-svg-icons';





// import React from "react"
// import "./Playback.css"


// function Playback (){

//     return (

//         <div>
//              <div className="music-main-container">
//         <div className="music-main-block">
//             <div className="music-main-header-logo">
//                 <p className="music-main-text-header">Nonstop DJ Mixes</p>
//                 <p className="music-main-text-header-2">for you</p>
//             </div>
//             <div className="music-main-block-2">
//             </div>
//         </div>
//         <div className="">
//             <input type="search" name="music-main-search-bar" className="music-main-search" placeholder="Your Old School Mixes"></input>
//         </div>
       
           
//     </div>

   
       
//         </div>
   
//     )
// }

// export default Playback; 