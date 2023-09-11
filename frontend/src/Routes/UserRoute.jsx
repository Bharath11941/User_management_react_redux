import { Routes,Route } from "react-router-dom"
import Login from "../Pages/UserPages/Login/Login"
import Signup from "../Pages/UserPages/Signup/Signup"
import Home from "../Pages/UserPages/Home/Home"
import UserPublic from "./UserPublic"
import UserProtect from "./UserProtect"
import Profile from "../Pages/UserPages/Profile/Profile"
import About from "../Pages/UserPages/newpage/About"

function UserRoute() {
  return (
    <Routes>
      
      <Route path="/login" element={<UserPublic><Login /></UserPublic>}/>
      <Route path="/signup" element={<UserPublic><Signup/></UserPublic>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<UserProtect><Profile /></UserProtect>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  )
}

export default UserRoute
