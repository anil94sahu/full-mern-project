import React from 'react'
import './Posts.css'
import {PostsData} from '../Data/PostsData';
import Post from '../Post/Post';
const Posts = () => {
  return (
    <div className="Posts">
        {
            PostsData.map((post,i) => {
                return <Post data={post}/>
            })
        }
    </div>
  )
}

export default Posts