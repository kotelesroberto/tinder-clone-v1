import React, { useState } from "react";
import "./Matches.css";

import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const Matches = () => {
  const [matches, setMatches] = useState([
    {
      name: "Pamela",
      profilePics:
        "https://media.todaybirthdays.com/upload/2015/10/31/pam-anderson.jpg",
    },
    {
      name: "Pamela",
      profilePics:
        "https://media.todaybirthdays.com/upload/2015/10/31/pam-anderson.jpg",
    },
    {
      name: "Pamela",
      profilePics:
        "https://media.todaybirthdays.com/upload/2015/10/31/pam-anderson.jpg",
    },
    {
      name: "Pamela",
      profilePics:
        "https://media.todaybirthdays.com/upload/2015/10/31/pam-anderson.jpg",
    },
    {
      name: "Pamela",
      profilePics:
        "https://media.todaybirthdays.com/upload/2015/10/31/pam-anderson.jpg",
    },
    {
      name: "Pamela",
      profilePics:
        "https://media.todaybirthdays.com/upload/2015/10/31/pam-anderson.jpg",
    },
    {
      name: "Pamela",
      profilePics:
        "https://media.todaybirthdays.com/upload/2015/10/31/pam-anderson.jpg",
    },
    {
      name: "Pamela",
      profilePics:
        "https://media.todaybirthdays.com/upload/2015/10/31/pam-anderson.jpg",
    },
  ]);

  return (
    <div className="matches">
      <h3 className="matches__title">New matches</h3>
      <div className="matches__slider">
        {matches.map((match) => (
          <div className="matches__item">
            <Avatar
              className="matches__image"
              alt={match.name}
              src={match.profilePics}
            />
            <p className="matches__name">{match.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
