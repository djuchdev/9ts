import React from "react"
import "./Verified.css"

function Verified (){

    return (

        <div>
              <div className="verified-container">
        <div className="verified-image">
            <img className="girlPhone" src="../assets/girl-phone.png" alt="girl on phone"></img>
        </div>
        <div className="verified-block">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p className="verified-text-header"> Verification Email Sent! </p>
            <br></br>
            <p className="verified-text-subheader"> You're almost there! Please check </p>
            <p className="verified-text-subheader"> your email inbox and follow the </p>
            <p className="verified-text-subheader"> instructions. </p>

            <div className="verified-bar">
                <a href="/FindFriends"><button style={{cursor: "pointer"}} className="verified-bar-ok">Ok!</button></a>
            </div>
            <div className="verified-bar">
                <a href="/MusicApp"><button style={{cursor: "pointer"}} className="verified-bar-resend">Resend to Your Email</button></a>
            </div>
            <div className="verified-logo">
                <p className="verified-text-logo">9TS</p>
            </div>
        </div>
    </div>
</div>
    )
}

export default Verified; 