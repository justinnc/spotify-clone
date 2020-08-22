import React from "react";
import Header from "./Header/Header.js";

import { useDataLayerValue } from "../../StateProvider";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SongRow from "./SongRow.js";

import "./Body.css";

function Body({ spotifyApi }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log("discover_weekly", discover_weekly);
  return (
    <div className="body">
      <Header spotifyApi={spotifyApi} />
      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="discover_weekly" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledWhiteIcon className="body__shuffle" fill="white" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item, index) => (
          <SongRow track={item.track} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Body;
