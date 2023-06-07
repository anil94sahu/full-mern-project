import React from 'react'
import './FollowerCard.css';
import {Followers} from '../Data/FollowerData';
const FollowerCard = () => {
  return (
    <div className="FollowerCard">
      <h3>Who is following you?</h3>
      {Followers.map(follower => {
        return(
          <div className="follower">
            <div>
              <img src={follower.img} className="followerImage" alt="" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">follow</button>
          </div>
        )
      })}
    </div>
    )
}

export default FollowerCard