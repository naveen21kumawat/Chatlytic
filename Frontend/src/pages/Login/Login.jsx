import React, { useEffect, useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";
import {
  databases,
  DATABSE_ID,
  COLLECTION_ID_MESSAGES,
} from "../../config/appWriteConfig";
import {Trash2} from 'react-feather'

import { ID, Query } from "appwrite";
function Login() {
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState("");

  const [currState, setCurrState] = useState("Sign up");
 
  useEffect(() => {
    
    
    const getMessages = async () => {
    const response = await databases.listDocuments(
      DATABSE_ID,
      COLLECTION_ID_MESSAGES,
      [Query.orderDesc("$createdAt"), Query.limit(20)]
    );
    console.log(" MY Response ", response.documents);
    console.log("")
    setMessages(response.documents);
  };
  
  getMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      body: messageBody,
    };
    const response = await databases.createDocument(
      DATABSE_ID,
      COLLECTION_ID_MESSAGES,
      ID.unique(),
      payload
    );
    console.log("Response", response);
    setMessages([response, ...messages]);
    setMessageBody("");
  };

  const handleDelete=async(message_id)=>{
    databases.deleteDocument(DATABSE_ID,COLLECTION_ID_MESSAGES,message_id)
    setMessages(prevState=> messages.filter(message => message.$id !== message_id))
  }

  return (
    <>
    <div className="msgBox">
      {messages.map((msg) => (
        
        <div key={msg.$id} className="messageBox">
          <div>
            <span>{msg.body}</span>
            <br />
            <span>{Date(msg.$createdAt)}</span>
            <Trash2 className="deleteButton"onClick={()=>{handleDelete(msg.$id)}}/>
          
          </div>
          </div>
      ))}
      </div>
      <div className="login">
        <img src={assets.logo_big} alt="" className="logo" />
        <form action="" className="login-form" onSubmit={handleSubmit}>
          <h2>{currState}</h2>
          {currState === "Sign up" ? (
            <input
              type="text"
              onChange={(e) => {
                setMessageBody(e.target.value);
              }}
              value={messageBody}
              placeholder="username"
              className="form-input"
              required
            />
          ) : null}
          <input
            type="email"
            placeholder="Email Address"
            className="form-input"
          />
          <input
            type="password"
            placeholder="password"
            className="form-input"
          />
          <button type="submit">
            {currState === "Sign up" ? "Create Account " : "Login"}
          </button>
          <div className="login-term">
            <input type="checkbox" />
            <p>Agree Terms & Privacy Policy</p>
          </div>
          <div className="login-forgot">
            {currState === "Sign up" ? (
              <p className="login-toggle">
                Already have an Account{" "}
                <span onClick={() => setCurrState("Login")}>Click Here</span>
              </p>
            ) : (
              <p className="login-toggle">
                Create an acoount{" "}
                <span onClick={() => setCurrState("Sign up")}>Click Here</span>
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
