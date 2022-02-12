import React, { useEffect } from "react"
import Login from "./parts/Login"
import { getTokenFromUrl } from './config/spotify'
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue } from './DataLayer'
import Player from './Player/Player'

const spoty = new SpotifyWebApi()

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
      spoty.setAccessToken(_token)
      spoty.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
    }
  }, []);
  // }, [dispatch, token]);
  //console.log('This is user', user);
  //console.log('This is token', token);
  return (
    <div className="app">
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
    </div>
  );
}
export default App;
