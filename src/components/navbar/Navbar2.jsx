import React from 'react'
import "./Navbar2.scss"
import usericon from "../../assets/usericon.png"
import cartimg from "../../assets/cart.png"
const Navbar2 = ({setpg,username}) => {
  return (
    <nav class="navbar">
    <div class="logo">toystore.com</div>
    
    {/* <!-- NAVIGATION MENU --> */}
    <ul class="nav-links">

      {/* <!-- USING CHECKBOX HACK --> */}
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

      {/* <!-- NAVIGATION MENUS --> */}
      <div class="menu">
      <li className='user'><img src={usericon} />Hellow, {username}</li>
        <li onClick={()=>setpg(1)}>Home</li>
        <li>Contact</li>
        <li onClick={()=>setpg(2)}>Cart</li>
      </div>
    </ul>
  </nav>
  )
}

export default Navbar2