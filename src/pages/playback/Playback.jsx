import React from "react"
import "./Playback.css"
// import Player from "../../components/player/Player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';



function Playback (){

    return (

        <div>
             <div className="music-main-container">
        <div className="music-main-block">
            <div className="music-main-header-logo">
                <p className="music-main-text-header">Nonstop DJ Mixes</p>
                <p className="music-main-text-header-2">for you</p>
            </div>
            <div className="music-main-block-2">
            </div>
        </div>
        <div className="">
            <input type="search" name="music-main-search-bar" className="music-main-search" placeholder="Your Old School Mixes"></input>
        </div>
         <div className="music-main-image">
 <img className="artwork" src="../assets/1.png" alt="music artwork"></img>
 <div className="songInfo">
     <span id="masterSongName">9TS - 80's Electro Mix</span>
 </div>
 <div id="countInfo">
     <span id="duration" style={{float: 'left'}}></span>
     <span id="timeleft" style={{float: "right"}}></span> 
  </div>  
 <div className="music-main-playback">
     <input type="range" name="range" id="myProgressBar" min="0" value="0" max="100"></input></div>
     <div className="icons">

        <FontAwesomeIcon icon={faStepBackward} size="3x" type="button" id="previous" className="fas fa-3x fa-step-backward" />
        <FontAwesomeIcon icon={faPlayCircle} size="3x" type="button" id="masterPlay" className="far fa-3x fa-play-circle" />
        <FontAwesomeIcon icon={faStepForward} size="3x" type="button" id="next" className="fas fa-3x fa-step-forward" />
          {/* <i className="fas fa-3x fa-step-backward" type="button" id="previous"></i>
         <i className="far fa-3x fa-play-circle" type="button" id="masterPlay"></i>
         <i className="fas fa-3x fa-step-forward" type="button" id="next"></i>  */}
     </div>
 </div>
           
    </div>

   
       
        </div>
   
    )
}

export default Playback; 