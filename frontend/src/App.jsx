import React from "react"
import {Routes, Route} from "react-router-dom"
// import {Person} from "@mui/icons-material"
import Topbar from "./components/topbar/topbar.jsx"
import FindFriends from "./pages/find-friends/FindFriends.jsx";
// import InfoFriends from "./InfoFriends"
import Welcome from "./pages/welcome/Welcome"
import ListenBlock from "./components/listenblock/ListenBlock.jsx"
// // import TopbarWelcome from "./components/topbar_welcome/TopbarWelcome";
// // import EntryForm from "./components/entryform/EntryForm";
import Login from "./pages/login/Login"
import Verified from "./pages/verified/Verified"
import UserStart from "./pages/userstart/UserStart.jsx";
import WelcomeBack from "./pages/welcomeback/WelcomeBack";
import Signup from "./pages/signup/Signup";
import Playback from "./pages/playback/Playback";
import Profile from "./pages/profile/Profile"
import MusicApp from "./components/musicapp/MusicApp.jsx";
import MusicDebug from "./components/musicdebug/MusicDebug.jsx"
import TestApp from "./components/musicapp/TestApp.jsx";
// import myapp from "/9ts-v2/myapp"



function App(){

    return (
        
<Routes>

<Route path="/welcome" 
element={<><Welcome /><ListenBlock /></>}>
</Route>

<Route path="/signup" 
element={<div><Signup /></div>}>
</Route>

<Route path="/login" 
element={<div><Login /></div>}>
</Route>

<Route path="/verified" 
element={<div><Verified /></div>}>
</Route>

<Route path="/findfriends" 
element={<div><Topbar /><FindFriends /></div>}>
</Route>

<Route path="/userstart" 
element={<div><UserStart /><ListenBlock /></div>}>
</Route>

<Route path="/welcomeback" 
element={<div><WelcomeBack /><ListenBlock /></div>}>
</Route>

<Route path="/profile" 
element={<div><Profile /></div>}>
</Route>


<Route path="/playback" 
element={<div><Playback /></div>}>
</Route>

<Route path="/musicapp" 
element={<div><MusicApp /></div>}>
</Route>

<Route path="/musicdebug" 
element={<div><MusicDebug /></div>}>
</Route>

<Route path="/testapp" 
element={<div><TestApp /></div>}>
</Route>

    </Routes>



       

    )
}


export default App; 




// function App(){

//     return (
// <>
// <Profile />
       
//         </>
//     )
// }


// export default App; 








// ********** PLAYBACK ***********


// function App(){

//     return (
// <>
// <Playback />
       
//         </>
//     )
// }


// export default App; 



// ********** SIGNUP ***********

// function App(){

//     return (
// <>
// <Signup />
       
//         </>
//     )
// }


// export default App; 



// ********** USERSTART ***********

// function App(){

//     return (
// <>
// <UserStart />
// <ListenBlock />
       
//         </>
//     )
// }


// export default App; 




// ********** VERIFIED ***********


// function App(){

//     return (
// <>
// <Verified />
       
//         </>
//     )
// }


// export default App; 





// ********** LOGIN ***********


// function App(){

//     return (
// <>
// <Login />
       
//         </>
//     )
// }


// export default App; 




// ********** WELCOME PAGE ********


// function App(){

//     return (
// <>
//         <Welcome />
//         <ListenBlock />
//         </>
//     )
// }


// export default App; 





// ********** FRIENDS LIST ********

// function App(){
//     return (
//       <div>
//         <Topbar />
//         {InfoFriends.map(friend => (
//           <FindFriends
//             key={friend.id}
//             name={friend.name}
//             img={friend.imgURL}
//           />
//         ))}
//       </div>
//     );
//   }
  


// function FriendsList(friendItem){

//     return (
       
//         <FindFriends
//         key = {friendItem.id}
//         name = {friendItem.name}
//         img = {friendItem.imgURL}
//         />
        

        

//     )

// }

// function App(){
// return (

//     // <Person />
// <div>
//     <Topbar />
    
//     {InfoFriends.map(FriendsList)}

// </div>
  
// )
    
// }

