import React from "react"
// import {Person} from "@mui/icons-material"
import Topbar from "./components/topbar/topbar.jsx"
import FindFriends from "./pages/find-friends/FindFriends.jsx";
import InfoFriends from "./InfoFriends"

function FriendsList(friendItem){

    return (
       
        <FindFriends
        key = {friendItem.id}
        name = {friendItem.name}
        img = {friendItem.imgURL}
        />
        

        

    )

}

function App(){
return (

    // <Person />
<div>
    <Topbar />
    
    {InfoFriends.map(FriendsList)}

</div>
  
)
    
}

export default App; 