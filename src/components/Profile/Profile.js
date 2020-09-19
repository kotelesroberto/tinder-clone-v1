import React, { useState } from "react";
import "./Profile.css";

import SettingsIcon from "@material-ui/icons/Settings";

import Avatar from "@material-ui/core/Avatar";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import IconButton from "@material-ui/core/IconButton";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Jimi Hendrix",
    imgUrl:
      "https://cdn.smehost.net/jimihendrixcom-uslegacyprod/wp-content/uploads/2017/12/171207_hendrix-bsots_525px.jpg",
    age: 70,
    title: "Experienced guitarist",
    education: "Life, stages, red houses",
  });
  return (
    <div className="profile">
      <div className="profile__details">
        <Avatar
          className="profile__image"
          alt={profile.name}
          src={profile.imgUrl}
        />

        <h1>
          {profile.name}, {profile.age}
        </h1>
        <p>{profile.title}</p>
        <p>{profile.education}</p>
      </div>

      <div className="profile_options">
        <IconButton
          aria-label="back"
          // onClick={() => history.replace(backButton)}
        >
          <SettingsIcon />
        </IconButton>
        <IconButton
          aria-label="back"
          // onClick={() => history.replace(backButton)}
        >
          <CameraAltIcon />
        </IconButton>
        <IconButton
          aria-label="back"
          // onClick={() => history.replace(backButton)}
        >
          <AssignmentTurnedInIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Profile;
