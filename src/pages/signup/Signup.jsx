import React from "react"
import "./Signup.css"

function Signup (){

    return (

        <div class="signup-container">

        <div className="signup-block-blue">
            <p className="signup-text-header">Welcome</p>
            <div className="signup-block-white">
            <form action="verified.html" method="POST">
                    <br></br>
                    <p className="signup-text-name-1">Name</p>
                    <input className="signup-bar-1" type="text" placeholder="" required></input>
                    <p className="signup-text-name-2">Email</p>
                    <input type="email" className="signup-bar-2" required></input>
                    <p className="signup-text-name-3">Password</p>
                    <input type="password" className="signup-bar-3" required></input>
                    <button type="submit" className="signup-bar-main">Sign Up</button>
            </form>
            <div className="signup-line"></div>
            <div className="signup-or-box">OR</div>
            <div className="social-links-signup">
                <a href="../verified/Verified.jsx"><img className="social fb" src="../assets/facebook.png" alt="login via facebook"></img></a>
                <a href="../verified/Verified.jsx"><img className="social twitter" src="../assets/twitter.png" alt="login via twitter"></img></a>
                <a href="../verified/Verified.jsx"><img className="social insta" src="../assets/instagram.png" alt="login via instagram"></img></a>
            </div>
            <p class="signup-already-user">Already a User? <a href="../login/Login.jsx">LOGIN</a></p>
        </div>
    </div>
    </div>
    )
}

export default Signup; 