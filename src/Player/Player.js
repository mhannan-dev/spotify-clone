import React from "react";
import './Player.css'
import Body from './Body'
import Sidebar from './Sidebar'
import Footer from './Footer'

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body />
                <Footer />
            </div>
        </div>
    );
}

export default Player;
