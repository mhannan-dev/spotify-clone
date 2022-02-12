import React, { useEffect } from "react"
import Login from "./parts/Login"
import { getTokenFromUrl } from './config/spotify'
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue } from './DataLayer'
import Player from './Player/Player'

const spotify = new SpotifyWebApi()

function App() {
  const [{ token }, dispatch] = useDataLayerValue()
  //Run based on a give condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";
    const _token = hash.access_token;
    //Token  
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      });
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
      // Show play list
      spotify.getUserPlaylists().then((playlists) => {
        //console.log(playlists)
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })
    }
  }, []);

  //console.log('This is user', user);
  //console.log('This is token', token);
  return (
    <div className="app">
      {/* {
        token ? (
          <Player spotify={spotify} />
          
        ) : (
          <Login />
        )
      } */}
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}
export default App;
