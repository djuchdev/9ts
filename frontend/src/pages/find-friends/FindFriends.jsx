import React from "react"
import "./FindFriends.css"
import InfoFriends from "../../InfoFriends";

function FindFriends(props) {
    return (
      <div className="friends-block-2">
        <div className="friends-list">
          <br></br>
          <br></br>
          <ul className="friends-names">
            {InfoFriends.map(friend => (
              <li key={friend.id}>
                <span>
                  <img src={friend.imgURL} className="friendsList" alt="avatar" />
                </span>
                <span className="friendsName">{friend.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  

export default FindFriends; 