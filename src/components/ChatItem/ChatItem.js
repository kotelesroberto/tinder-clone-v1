import React from "react";
import "./ChatItem.css";

import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const ChatItem = ({ name, message, timestamp, profilePics }) => {
  return (
    <Link to={`/chat/${name}`} className="chatItem__link">
      <div className="chatItem">
        <Avatar className="chatItem__image" alt={name} src={profilePics} />
        <div className="chatItem__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chatItem__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};

export default ChatItem;
