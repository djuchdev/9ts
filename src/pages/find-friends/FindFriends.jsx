import React from "react"
import "./FindFriends.css"

function FindFriends(props){

    return (
        <div>
        <div className="friends-block-2">
                <div className="friends-list">
                    <br></br>
                    <br></br>
                
                    <ul>
                        <li>
                            <span>
                                <img src={props.img} className="friendsList" alt="avatar"></img>
                            </span>
                            <span className="friendsName">{props.name}</span>
                        </li>
                        <li>
                            <span>
                                <img src={props.img} className="friendsList" alt="avatar"></img>
                            </span>
                            <span className="friendsName">{props.name}</span>
                        </li>
                        <li>
                            <span>
                                <img src={props.img} className="friendsList" alt="avatar"></img>
                            </span>
                            <span className="friendsName">{props.name}</span>
                        </li>
                        <li>
                            <span>
                                <img src={props.img}  className="friendsList" alt="avatar"></img>
                            </span>
                            <span className="friendsName">{props.name}</span>
                        </li>
                        <li>
                            <span>
                                <img src={props.img}  className="friendsList" alt="avatar"></img>
                            </span>
                            <span className="friendsName">{props.name}</span>
                        </li>
                        <li>
                            <span>
                                <img src={props.img}  className="friendsList" alt="avatar"></img>
                            </span>
                            <span className="friendsName">{props.name}</span>
                        </li>
                        <li>
                            <span>
                                <img src={props.img}  className="friendsList" alt="avatar"></img>
                            </span>
                            <span className="friendsName">{props.name}</span>
                        </li>
                        <li>
                            <span>
                                <img src={props.img} className="friendsList" alt="avatar"></img>
                            </span>
                            <span className="friendsName">{props.name}</span>
                        </li>
                    </ul>
                    </div>
                </div>
        </div>
    )
}

export default FindFriends; 