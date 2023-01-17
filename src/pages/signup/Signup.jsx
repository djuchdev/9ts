import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Signup.css"



function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(name, email, password);
        const res = await fetch("http://localhost:3000/signup", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        })
        const data = await res.json()
        console.log(data, "userRegister");
        // this.props.history.push('/verified');
        return navigate('/verified')
    }

    return (
        <div className="signup-container">
            <div className="signup-block-blue">
                <p className="signup-text-header">Welcome</p>
                <div className="signup-block-white">
                    <form onSubmit={handleSubmit}>
                        <br></br>
                        <p className="signup-text-name-1">Name</p>
                        <input
                            className="signup-bar-1"
                            type="text"
                            placeholder=""
                            required
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />

                        <p className="signup-text-name-2">Email</p>
                        <input
                            type="email"
                            className="signup-bar-2"
                            required
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />

                        <p className="signup-text-name-3">Password</p>
                        <input
                            type="password"
                            className="signup-bar-3"
                            required
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />

                        <button style={{ cursor: "pointer" }} type="submit" className="signup-bar-main">Sign Up</button >
                        {/* <button style={{ cursor: "pointer" }} type="submit" className="signup-bar-main">Sign Up</button > */}
                    </form>

                    <div className="signup-line"></div>
                    <div className="signup-or-box">OR</div>
                    <div className="social-links-signup">
                        <a href="/verified"><img className="social fb" src="../assets/facebook.png" alt="login via facebook"></img></a>
                        <a href="/verified"><img className="social twitter" src="../assets/twitter.png" alt="login via twitter"></img></a>
                        <a href="/verified"><img className="social insta" src="../assets/instagram.png" alt="login via instagram"></img></a>
                    </div>
                    <p className="signup-already-user">Already a User? <a href="/login">LOGIN</a></p>
                </div>
            </div>
        </div >
    )
}

export { Signup }
export default Signup
