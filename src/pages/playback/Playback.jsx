import React from "react"
import "./Playback.css"

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
            <input type="search" name="music-main-search-bar" class="music-main-search" placeholder="Your Old School Mixes"></input>
        </div>
        <div className="music-main-image">
            <img className="artwork" src="../assets/1.png" alt="music artwork"></img>
            <div className="songInfo">
                <span id="masterSongName">9TS - 80's Electro Mix</span>
            </div>
            <div id="countInfo">
                <span id="duration"></span>
                {/* style="float:left;" */}
                <span id="timeleft"></span> 
                {/* style="float:right;"  */}
             </div>  
            <div className="music-main-playback">
                <input type="range" name="range" id="myProgressBar" min="0" value="0" max="100"></input></div>
                <div className="icons">
                   {/* fontawesome icons */}
                    <i className="fas fa-3x fa-step-backward" type="button" id="previous"></i>
                    <i className="far fa-3x fa-play-circle" type="button" id="masterPlay"></i>
                    <i className="fas fa-3x fa-step-forward" type="button" id="next"></i> 
                </div>
            </div>
           
    </div>

   
       
        </div>
   
    )
}

export default Playback; 