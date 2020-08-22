import React from "react";
import millisToMinutesAndSeconds from "../utilities/MsToMinute";
import "./SongRow.css";

function SongRow({ track }) {
  console.log(track);
  return (
    <div className="songRow">
      <img className="songRow_album" src={track.album.images[0].url} alt="" />
      <div className="songRow_info">
        <div>
          <h1>{track.name}</h1>
          <p>
            {track.artists.map((artist) => artist.name).join(",")} -{" "}
            {track.album.name}
          </p>
        </div>
        <div>
          <h1 className="songRow_duration">
            {millisToMinutesAndSeconds(track.duration_ms)}{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SongRow;
