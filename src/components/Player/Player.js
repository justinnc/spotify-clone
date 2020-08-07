import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

import "./Player.css";

function Player({ spotifyApi }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotifyApi={spotifyApi} />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Player;
