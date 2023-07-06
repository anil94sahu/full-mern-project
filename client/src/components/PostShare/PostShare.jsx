import React, {useState, useRef} from 'react'
import './PostShare.css'
import {UilScenery, UilTimes} from '@iconscout/react-unicons';
import {UilPlayCircle} from '@iconscout/react-unicons';
import {UilLocationPoint} from '@iconscout/react-unicons';
import {UilSchedule} from '@iconscout/react-unicons';
import ProfileImage from '../../img/profileImg.jpg'
import { useSelector } from 'react-redux';
import { uploadImage } from '../../actions/uploadAction';
const PostShare = () => {
    const [image,setImage] = useState(null);
    const imageRef = useRef();
    const desc= useRef();
    const {data} = useSelector(state=>state.authReducer.authData);
    const user = data;
    const onImageChange= (event)=>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage(img)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newPost = {
            userId:user._id,
            desc:desc.current.value
        }
        if(image){
            const data=new FormData();
            const filename = Date.now() + image.name;
            data.append("name",filename);
            data.append("file",image.name);
            newPost.image = filename;
            console.log(newPost);
            try {
                dispatchEvent(uploadImage(data));
            } catch (error) {
                console.log(error);
                
            }
        }

    }
  return (
    <div className="PostShare">
        <img src={ProfileImage} alt="" />
        <div>
            <input type="text" placeholder='What"s happening?' ref = {desc} />
            <div className="postOptions">
                <div className="option" onClick={()=>imageRef.current.click()}>
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
                    <button className="button fc-button" onClick={handleSubmit}>Share</button>
                    <div style={{display:'none'}}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
            </div>
            {
                    image && (
                        <div className="previewImage">
                            <UilTimes onClick={()=>setImage(null)} />
                            <img src={URL.createObjectURL(image)} alt="" />
                        </div>
                    )
            }
        </div>
    </div>
  )
}

export default PostShare