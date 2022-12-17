import React from "react"
import "./Profile.css"

function Profile (){

    return (

        <div>
        <div className="profile-container">
        <div className="profile-block">
            <div className="profile-header-logo">
                <p className="profile-text-header">Find Friends who</p>
                <p className="profile-text-header-2">LOVE great music </p>
            </div>
            <div className="profile-block-2">
                <div className="profile-list">
                    <br></br>
                    <br></br>
                    <ul>
                        <li>
                        <div>
                        <span><img class="profileMainImg" src="../assets/walter-rodriguez.png" alt="profile avatar"></img></span>
                        <br></br>
                        <br></br>
                        <span class="profileName">Walter Rodriguez</span>
                        <br></br>
                        <span className="profileEmail">walter@piurtech</span>
                        </div>
                        </li>
                        <br></br>
                        <br></br>
                        <div>
                            <p class="profileSubtitle">Favorite Mixes</p>
                        </div>
                        <div class="albums">
                            <div>
                                <li>
                                    <span><img src="../assets/2.png" class="albumArt" alt="album art"></img></span>                               
                                </li>                 
                            </div>
                                    <div>
                                    <li>
                                    <span><img src="../assets/3.png" class="albumArt" alt="album art"></img></span>                                      
                                    </li>
                                    </div>
                        </div>             
                    </ul>
                  </div>             
            </div>
        </div>   
    </div>           
        </div>
    )
}

export default Profile; 