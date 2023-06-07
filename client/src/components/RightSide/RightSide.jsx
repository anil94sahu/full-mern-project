import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Comment from "../../img/comment.png";
import Noti from "../../img/noti.png";
import { UilSetting } from "@iconscout/react-unicons";
import Trends from "../Trends/Trends";
import ShareModal from "../ShareModal/ShareModal";
const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" srcset="" />
        <UilSetting />
        <img src={Noti} alt="" srcset="" />
        <img src={Comment} alt="" srcset="" />
      </div>
      <Trends />
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
