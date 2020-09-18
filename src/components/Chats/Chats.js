import React from "react";
import ChatItem from "../ChatItem/ChatItem";
import Matches from "../Matches/Matches";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Matches />

      <h3 className="chats__title">Messages</h3>

      <ChatItem
        name="Sporty Spice 1"
        message="Hi Lovely! 💯"
        timestamp="40 sec ago"
        profilePics=""
      />
      <ChatItem
        name="Sporty Spice"
        message="Hi Lovely! 🚴🏼"
        timestamp="40 sec ago"
        profilePics="https://api.time.com/wp-content/uploads/2016/08/mel-c-sporty-spice-spice-girl-reunion-tour.jpg?quality=85&w=1200&h=628&crop=1"
      />
      <ChatItem
        name="Sporty Spice"
        message="Hi Lovely! 💋"
        timestamp="40 sec ago"
        profilePics="https://api.time.com/wp-content/uploads/2016/08/mel-c-sporty-spice-spice-girl-reunion-tour.jpg?quality=85&w=1200&h=628&crop=1"
      />
      <ChatItem
        name="Sporty Spice"
        message="Hi Lovely!"
        timestamp="40 sec ago"
        profilePics="https://api.time.com/wp-content/uploads/2016/08/mel-c-sporty-spice-spice-girl-reunion-tour.jpg?quality=85&w=1200&h=628&crop=1"
      />
    </div>
  );
};

export default Chats;
