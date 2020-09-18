import React from "react";
import "./Chat.css";

import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const Chat = ({ name, message, timestamp, profilePics }) => {
  return (
    <Link to={`/chat/${name}`} className="chat__link">
      <div className="chat">
        <Avatar className="chat__image" alt={name} src={profilePics} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};

export default Chat;
