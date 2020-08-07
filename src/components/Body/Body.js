import React from "react";
import Header from "./Header/Header.js";

import "./Body.css";

function Body({ spotifyApi }) {
  return (
    <div className="body">
      <Header spotifyApi={spotifyApi} />
    </div>
  );
}

export default Body;
