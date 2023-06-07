import React from "react";
import "./ProfileCard.css";
import Profile from "../../img/profileImg.jpg";
import Cover from "../../img/cover.jpg";
const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>Zendaya Mj</span>
        <span>UI/UX designer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6.849</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Follower</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
