import React from "react";
import "./SwipeButttons.css";

import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";

function SwipeButttons() {
  return (
    <div className="swipeButttons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontSize="large"></ReplayIcon>
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontSize="large"></CloseIcon>
      </IconButton>
      <IconButton className="swipeButtons_star">
        <StarRateIcon fontSize="large"></StarRateIcon>
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon fontSize="large"></FavoriteIcon>
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon fontSize="large"></FlashOnIcon>
      </IconButton>
    </div>
  );
}

export default SwipeButttons;
