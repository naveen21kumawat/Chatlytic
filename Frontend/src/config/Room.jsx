import React, { useEffect, useState } from "react";
import { Databases } from "appwrite";
import {
  databases,
  DATABSE_ID,
  COLLECTION_ID_MESSAGES,
} from "./appWriteConfig";
import { ID } from "appwrite";
const Room = () => {
  const [messages, setMessages] = useState([]);
  const [messageBody, setMessageBody] = useState("");

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    const response = await databases.listDocuments(
      DATABSE_ID,
      COLLECTION_ID_MESSAGES
    );
    console.log(response);
    setMessages(response.documents);
  };

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
    console.log("Created", response);
    setMessageBody("");
  };

  return (
    <>
      <form id="message--form" onSubmit={handleSubmit}>
        <div>
          <textarea
            required
            maxLength="1000"
            palceholder="Say Something..."
            onChange={(e) => {
              setMessageBody(e.target.value);
            }}
            value={messageBody}
          ></textarea>
        </div>
        <div>
          <input type="submit" value="Send"></input>
        </div>
      </form>
      {messages.map((item) => (
        <div key={item.$id}>
          <div>
            <span>{item.body}</span>
            <br />
            <span>{item.$createdAt}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Room;
