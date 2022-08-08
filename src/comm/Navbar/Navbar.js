import React from 'react'
import "../Navbar/Navbar.css"
export default function Navbar() {
  return (
   <>
   <div className='navbar'>
    <div className='facebook-logo'>
    <i class="bi bi-facebook"></i>
    </div>
      <div className='search-box' >
     <i className='fa fa-search '></i>
      <input placeholder='search user name'/>
      </div>
      <div className='pages'>
        <span>Home</span>
        <span>Watch</span>
        <span>Marketplace</span>
        <span>Group</span>
        <span>Gameing</span>

      </div>
      <div className='icon-section'>
        <div className="person" >
      <i class="fa fa-solid fa-user" id='icon'></i>
      <span className='message-number'>1</span>
      </div>
      <div className="message" >
      <i class='fa fa-envelope' id='icon'></i>
      <span className='message-number'>1</span>
      </div>
      <div className="not" >
      <i className='fa fa-bell ' id='icon'></i>
      <span className='message-number'>1</span>
      </div>
      <div className='profile-img'>
        <img src="/img/pic5.jpeg" alt='' className='profile-pic'/>
      </div>
      </div>
      
   </div>
   <hr/>
   </>
  )
}
