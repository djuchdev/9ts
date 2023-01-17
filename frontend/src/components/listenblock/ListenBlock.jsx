import React from "react"
import "./ListenBlock.css"

function ListenBlock (){

    return (

        <div>

 <div className="main-block">
 <br></br>
 <br></br>
 <p className="main-text-header"> Listen to Your </p>
 <p className="main-text-header"> Throwbacks, </p>
 <p className="main-text-header"> All Day .. Everyday </p>
 <br></br>
 <p className="main-text-subheader"> All the music you grew up with, </p>
 <p className="main-text-subheader"> and the memories you made. </p>
 <p className="main-text-subheader"> Now you have them in 1 place. </p>
 <div className="main-logo">
     <p className="main-text-logo">9TS</p>
 </div>
</div>
<div className="main-bar-login">
<a href="/signup"><button style={{cursor: "pointer"}} className="main-text-login-bar">Tap to Start Login</button></a>
</div>
            
        </div>
    )
}

export default ListenBlock; 
