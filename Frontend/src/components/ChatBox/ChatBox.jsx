import React from "react";
import "./ChatBox.css";
import assets from "../../assets/assets";

function ChatBox() {
  return (
    <div className="chat-box">
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>
          Richard SanFord <img className="dot" src={assets.green_dot} alt="" />
        </p>
        <img src={assets.help_icon} className="help" alt="" />
      </div>

      <div className="chat-msg">
        <div className="s-msg">
          <p className="msg">Lorem ipsum dolor sit amet...</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30</p>
          </div>
        </div>
        <div className="s-msg">
          <img src={assets.pic1} className="msg-img" alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30</p>
          </div>
        </div>

        <div className="r-msg">
          <p className="msg">
            Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Expedita, accusantium? dolor sit amet...
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Send a message" />
        <input
          type="file"
          name=""
          id="image"
          accept="image/png , image.jpeg"
          hidden
        />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  );
}

export default ChatBox;
