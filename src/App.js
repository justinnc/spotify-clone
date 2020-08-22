import React, { useEffect } from "react";
import { getTokenFromUrl } from "./spotify";
import { useDataLayerValue } from "./StateProvider";

import SpotifyWebApi from "spotify-web-api-js";
import Login from "./Login";
import Player from "./components/Player/Player";
import "./App.css";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;

    if (_token) {
      dispatch({ type: "SET_TOKEN", token: _token });

      spotifyApi.setAccessToken(_token);

      spotifyApi.getMe().then((user) => {
        dispatch({ type: "SET_USER", user: user });
      });

      spotifyApi.getUserPlaylists().then((userPlaylists) => {
        dispatch({ type: "SET_PLAYLISTS", playlists: userPlaylists });
      });

      spotifyApi.getPlaylist("37i9dQZEVXcFge7RgWLjlo").then((response) => {
        dispatch({ type: "SET_DISCOVER_WEEKLY", discover_weekly: response });
      });
    }
  }, []);

  return (
    // BEM
    <div className="app">
      {token ? <Player spotifyApi={spotifyApi} /> : <Login />}
    </div>
  );
}

export default App;
