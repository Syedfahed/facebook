import React, {} from 'react'

import "../Feed/Feed.css"

export default function Feed() {
 
  return (
    <>
    <div className='Timeline'>
        <div className='side-bar'>
          <ul>
            <li><i class="bi bi-rss"></i>
            <span>Feed</span></li>
            <li><i class="bi bi-chat-left-dots"></i>
            <span>Chats</span></li>
            <li>
            <i class="bi bi-play-circle-fill"></i>
            <span>Video</span></li>
            <li>
            <i class="bi bi-bookmark-fill"></i>
            <span>Bookmarks</span></li>
            <li>
            <i class="bi bi-patch-question"></i>
            <span>Question</span></li>
            <li>
            <i class="bi bi-calendar-event-fill"></i>
            <span>Event</span></li>
          </ul>
          <div className="btn">
          <button className='button'>Show More</button>
          </div>
          <hr/>
          <div className="user-id">
            <img  alt="" src='/img/pic5.jpeg' className='user-pic' />
            <span>syed fahed</span>
          </div>
          <div className="user-id">
            <img  alt="" src='/img/pic5.jpeg' className='user-pic' />
            <span>Syed Fahed</span>
          </div>
          <div className="user-id">
            <img  alt="" src='/img/pic5.jpeg' className='user-pic' />
            <span>Syed Fahed</span>
          </div>
          <div className="user-id">
            <img  alt="" src='/img/pic5.jpeg' className='user-pic' />
            <span>Syed Fahed</span>
          </div>
          <div className="user-id">
            <img  alt="" src='/img/pic5.jpeg' className='user-pic' />
            <span>Syed Fahed</span>
          </div>
          <div className="user-id">
            <img  alt="" src='/img/pic5.jpeg' className='user-pic' />
            <span>Syed Fahed</span>
          </div>
        </div>
        
        <div className='center-bar'>
          <div className='profile-box'>
          <div className='profile-cover-pic'>
            <img className='cover-pic' alt='' src='/img/pic1.jpg'/>
            <div className='pic-profile-section'>
            <img className='profile-img' alt='' src='/img/pic5.jpeg'/>
            </div>
            <div className='profile-name' >
             <h1>Syed Fahed</h1>
             <span>Hello Everyone</span>
             </div>
          </div>
          </div>
          <div className='post-box'>
          <img  alt="" src='/img/pic5.jpeg' className='user-pic' />
          <div className="input-post">
            <input placeholder="What's in your mind post it"/>
          </div>
          <hr className='line'/>
          <div className='post-info'>
          <i class="bi bi-images"></i>
          <span>Photo or Video</span>
          <i class="bi bi-tag-fill"></i>
          <span>Tag</span>
          <i class="bi bi-geo-alt-fill"></i>
          <span>Location</span>
          <i class="bi bi-emoji-smile"></i>
          <span>Feeling</span>
          <button className='share'>Share</button>
          </div>
          </div>
          <div className='timeline-post'>
               <div className='user-info'>
               <img  alt="" src='/img/pic5.jpeg' className='user-pic' />
               <span className='userinfo-name'>Syed Fahed</span>
               <i class="bi bi-three-dots-vertical"></i>
               <div className='user-post-info'>
                <samp>Hi Everyone</samp>
                <img alt="" className='user-post-info-pic' src='/img/pic1.jpg' />
               </div>
               <div className='like-section'>
              <span>Like</span>
                <span>Comment</span>
                <span>Share</span>
               </div>
               </div>
               <div className='user-info'>
               <img  alt="" src='/img/pic5.jpeg' className='user-pic' />
               <span className='userinfo-name'>Syed Fahed</span>
               <i class="bi bi-three-dots-vertical"></i>
               <div className='user-post-info'>
                <samp>Hi Everyone</samp>
                <img alt="" className='user-post-info-pic' src='/img/pic1.jpg' />
               </div>
               <div className='like-section'>
              <span>Like</span>
                <span>Comment</span>
                <span>Share</span>
               </div>
               </div>
          </div>
        </div>
        <div className="left-bar">
          <div className='brithday-wish'>
          
            <div className='news'>
            <img alt='' src='/img/pic4.webp' className='news-img'/>
            <h2 className='news-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, est molestias sapiente, dolorum ratione</h2>
          </div>
          <div className='online-friend'>
            <h6>Online Friend</h6>
          </div>
          <div className='online-friend-info'>
          <div className="user-id">
            <img  alt="" src='/img/pic5.jpeg' className='user-pic' />
            <i  class="bi bi-dot"></i>
            <span className='name'>Syed Fahed</span>
          </div>
          <div className="user-id">
            <img  alt="" src='/img/pic5.jpeg' className='user-pic' />
            <i  class="bi bi-dot"></i>
            <span className='name'>Syed Fahed</span>
          </div>
          <div className="user-id">
            <img  alt="" src='/img/pic5.jpeg' className='user-pic' />
            <i  class="bi bi-dot"></i>
            <span className='name'>Syed Fahed</span>
          </div>
          </div>
          
          </div>
         
        </div>
      
    </div>
    
    </>
  )
}
