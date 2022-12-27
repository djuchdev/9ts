import React from "react"
import "./Login.css"

function Login (){

    return (

       
<div className="login-container">
<div className="login-block-blue">
    <p className="login-text-header">Welcome</p>
    <div className="login-block-white">
    {/* <form action="verified" method="POST"> */}
            <br></br>
            <p className="login-text-name-1">Name</p>
            <input className="login-bar-1" type="text" placeholder="" ></input>
            {/* required */}
            <p className="login-text-name-2">Email</p>
            <input type="email" className="login-bar-2" ></input>
            {/* required */}
            <p className="login-text-name-3">Password</p>
            <input type="password" className="login-bar-3" ></input>
            {/* required */}
            <a href="/verified"><button style={{cursor: "pointer"}} type="submit" className="login-bar-main">Login</button></a>
    {/* </form> */}
   
    <div className="login-line"></div>
    <div className="login-or-box">OR</div>
    <div className="social-links-login">
        <a href="/verified"><img className="social fb" src="../assets/facebook.png" alt="facebook logo"></img></a>
        <a href="/verified"><img className="social twitter" src="../assets/twitter.png" alt="twitter logo"></img></a>
        <a href="/verified"><img className="social insta" src="../assets/instagram.png" alt="instagram logo"></img></a>
        </div>
    </div>
</div>     
</div>
    )
}

export default Login; 