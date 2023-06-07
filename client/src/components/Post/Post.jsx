import React from 'react'
import './Post.css';
import Like from '../../img/like.png';
import DontLike from '../../img/notlike.png';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt="" srcset="" />
        <div className="postReact">
            <img src={data.liked?Like:DontLike} alt="" srcset="" />
            <img src={Comment} alt="" srcset="" />
            <img src={Share} alt="" srcset="" />
        </div>
        <span style={{color:'var(--gray)' , fontSize:'12px'}}>{data.likes} likes</span>
        <div className="detail">
            <span><b>{data.name}</b></span>
            <span>{data.desc}</span>
        </div>
    </div>
  )
}

export default Post