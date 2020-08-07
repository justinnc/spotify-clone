import React from "react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer_albumLogo"
          src="https://steamuserimages-a.akamaihd.net/ugc/921268572045139552/8F6DABFD815EA2BD8A6137F1D9342674624E19F2/"
          alt=""
        />
        <div className="footer_songInfo">
          <h4>RICE</h4>
          <p>PINK GUY</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__icon" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeUpIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
