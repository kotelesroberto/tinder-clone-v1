import React, { useState } from "react";
import "./ChatScreen.css";

import Avatar from "@material-ui/core/Avatar";
import SendIcon from "@material-ui/icons/Send";

import { animateScroll } from "react-scroll";

const ChatScreen = () => {
  // type message into input
  const [input, setInput] = useState("");

  // messages
  const [messages, setMessages] = useState([
    {
      name: "Brian May",
      message: "Queen is the king! 💋",
      image:
        "https://api.time.com/wp-content/uploads/2016/08/mel-c-sporty-spice-spice-girl-reunion-tour.jpg?quality=85&w=1200&h=628&crop=1",
    },
    {
      name: "Brian May",
      message: "How it's going?",
      image:
        "https://api.time.com/wp-content/uploads/2016/08/mel-c-sporty-spice-spice-girl-reunion-tour.jpg?quality=85&w=1200&h=628&crop=1",
    },
    {
      message: "All ok!",
    },
  ]);

  const hadleSend = (e) => {
    e.preventDefault();
    if (!input) return;

    setMessages([
      ...messages,
      {
        message: input,
      },
    ]);

    setInput("");
    scrollToBottom();
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      animateScroll.scrollToBottom({
        containerId: "chatScreen",
      });
    }, 200);
  };

  return (
    <div className="chatScreen" id="chatScreen">
      <p className="chatScreen__title">You matched with May on 13/03/20</p>

      {messages.map((message) => (
        <div className="chatScreen__message">
          {message.image && (
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
          )}
          <p
            className={
              message.name ? "chatScreen__text" : "chatScreen__text me"
            }
          >
            {message.message}
          </p>
        </div>
      ))}

      <div>
        <form action="" className="chatScreen__input">
          <input
            type="text"
            className="chatScreen__inputField"
            placeholder="Type a message..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            className="chatScreen__inputButton"
            onClick={hadleSend}
            disabled={input?.length ? false : true}
          >
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
