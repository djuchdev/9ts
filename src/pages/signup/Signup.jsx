import React from "react"
import "./Signup.css"

function Signup (){

    return (

        <div class="signup-container">

        <div className="signup-block-blue">
            <p className="signup-text-header">Welcome</p>
            <div className="signup-block-white">
            {/* <form action="verified" method="POST"> */}
                    <br></br>
                    <p className="signup-text-name-1">Name</p>
                    <input className="signup-bar-1" type="text" placeholder="" ></input>
                    {/* required */}
                    <p className="signup-text-name-2">Email</p>
                    <input type="email" className="signup-bar-2"></input>
                    {/* required */}
                    <p className="signup-text-name-3">Password</p>
                    <input type="password" className="signup-bar-3"></input>
                    {/* required */}
                    <a href="/verified"><button style={{cursor: "pointer"}} type="submit" className="signup-bar-main">Sign Up</button></a>
          {/* </form> */}
            <div className="signup-line"></div>
            <div className="signup-or-box">OR</div>
            <div className="social-links-signup">
                <a href="/verified"><img className="social fb" src="../assets/facebook.png" alt="login via facebook"></img></a>
                <a href="/verified"><img className="social twitter" src="../assets/twitter.png" alt="login via twitter"></img></a>
                <a href="/verified"><img className="social insta" src="../assets/instagram.png" alt="login via instagram"></img></a>
            </div>
            <p class="signup-already-user">Already a User? <a href="/login">LOGIN</a></p>
        </div>
    </div>
    </div>
    )
}

export default Signup; 