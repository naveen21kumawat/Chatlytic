import React, { useState } from "react";
import "./ProfileUpdate.css";
import assets from "../../assets/assets";

function ProfileUpdate() {
  const [image, setImage] = useState(false);
  return (
    <div className="profile">
      <div className="profile-container">
        <form action="">
          <h3>profile Details</h3>
          <label htmlFor="avatar">
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="avatar" accept=".png, .jpg, .jepg" hidden />
            <img src={image ? URL.createObjectURL(image) : assets.avatar_icon} alt="" />
            upload profile image
          </label>
          <input type="text" placeholder="Your Name" required />
          <textarea name="" id="" placeholder="Write Profile Bio"></textarea>
          <button type="submit">Save</button>
        </form>
        <img className="profile-pic" src={image ? URL.createObjectURL(image) : assets.logo_icon} alt="" />
      </div>
    </div>
  );
}

export default ProfileUpdate;
