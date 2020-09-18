import React from "react";
import Chat from "../Chat/Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <h3 className="chats__title">New matches</h3>

      <h3 className="chats__title">Messages</h3>

      <Chat
        name="Sporty Spice 1"
        message="Hi Lovely! 💯"
        timestamp="40 sec ago"
        profilePics=""
      />
      <Chat
        name="Sporty Spice"
        message="Hi Lovely! 🚴🏼"
        timestamp="40 sec ago"
        profilePics="https://api.time.com/wp-content/uploads/2016/08/mel-c-sporty-spice-spice-girl-reunion-tour.jpg?quality=85&w=1200&h=628&crop=1"
      />
      <Chat
        name="Sporty Spice"
        message="Hi Lovely! 💋"
        timestamp="40 sec ago"
        profilePics="https://api.time.com/wp-content/uploads/2016/08/mel-c-sporty-spice-spice-girl-reunion-tour.jpg?quality=85&w=1200&h=628&crop=1"
      />
      <Chat
        name="Sporty Spice"
        message="Hi Lovely!"
        timestamp="40 sec ago"
        profilePics="https://api.time.com/wp-content/uploads/2016/08/mel-c-sporty-spice-spice-girl-reunion-tour.jpg?quality=85&w=1200&h=628&crop=1"
      />
    </div>
  );
};

export default Chats;
