import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import { useDataLayerValue } from "./StateProvider";

import SpotifyWebApi from "spotify-web-api-js";
import Login from "./Login";
import Player from "./Player";
import "./App.css";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    if (_token) {
      spotifyApi.setAccessToken(_token);
      spotifyApi.getMe().then((user) => {
        dispatch({ type: "SET_USER", user });
      });
    }
  }, []);
  console.log("👦", user);

  return (
    // BEM
    <div className="app">{token ? <Player /> : <Login />}</div>
  );
}

export default App;
