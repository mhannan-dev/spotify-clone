import { React, useEffect, useState } from "react"
import Login from "./parts/Login"
import { getTokenFromUrl } from './config/spotify'
import SpotifyWebApi from "spotify-web-api-js"
const spotify = new SpotifyWebApi()
function App() {
  const [token, setToken] = useState(null)
  //Similar to componentDidMount and componentDidUpdate:
  //Run based on a give condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    //Token  
    if (_token) {
      setToken(_token)
      spotify.setAccessToken(_token)
      spotify.getMe().then((user)=>{
        console.log('User', user);
      })
    }
    //console.log('This is token', token);
  }, []);
  return (
    <div className="app">
      {
        token ? (
          <h1>I am logged in</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}
export default App;
