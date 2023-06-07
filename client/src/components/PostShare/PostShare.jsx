import React from 'react'
import './PostShare.css'
import {UilScenery} from '@iconscout/react-unicons';
import {UilPlayCircle} from '@iconscout/react-unicons';
import {UilLocationPoint} from '@iconscout/react-unicons';
import {UilSchedule} from '@iconscout/react-unicons';
import ProfileImage from '../../img/profileImg.jpg'
const PostShare = () => {
  return (
    <div className="PostShare">
        <img src={ProfileImage} alt="" />
        <div>
            <input type="text" placeholder='What"s happening?' />
            <div className="postOptions">
                <div className="option">
                    <UilScenery style = {{color:'var(--photo)'}}/>
                </div>
                <div className="option">
                    <UilPlayCircle style = {{color:'var(--video)'}}/>
                </div>
                <div className="option">
                    <UilLocationPoint style = {{color:'var(--location)'}} />
                </div>
                <div className="option">
                    <UilSchedule style = {{color:'var(--shedule)'}} />
                </div>
                <div className="option">
                <button className="button fc-button">Share</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostShare