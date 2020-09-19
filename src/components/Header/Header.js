import React from "react";
import "./Header.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { Link, useHistory } from "react-router-dom";

const Header = ({ backButton }) => {
  const history = useHistory();

  return (
    <div className="header">
      {backButton ? (
        <IconButton
          aria-label="back"
          onClick={() => history.replace(backButton)}
        >
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <Link to="/">
          <IconButton
            aria-label="back"
            onClick={() => history.replace(backButton)}
          >
            <img
              src="assets/tinder-logo.svg"
              alt="Tinder"
              className="header__logo"
            />
          </IconButton>
        </Link>
      )}

      <Link to="/chat">
        <IconButton aria-label="chats">
          <QuestionAnswerIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>

      <Link to="/profile">
        <IconButton aria-label="profile">
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
