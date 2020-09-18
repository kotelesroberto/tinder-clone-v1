import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

const Header = () => {
  return (
    <div className="header">
      <IconButton aria-label="profile">
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="Tinder"
        className="header__logo"
      />

      <IconButton aria-label="messages">
        <QuestionAnswerIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
