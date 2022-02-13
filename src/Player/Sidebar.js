import React from "react";
import './Sidebar.css'
import SideBarOption from './SideBarOption'
import Home from '@material-ui/icons/Home';
import Search from '@material-ui/icons/Search';
import List from '@material-ui/icons/List';
import { useDataLayerValue } from '../DataLayer'

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue()

    return (
        <div className="sidebar">
            <img className="sidebr__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="Spotify Logo" />
            <SideBarOption Icon={Home} title="Home" />
            <SideBarOption Icon={Search} title="Search" />
            <SideBarOption Icon={List} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAY LISTS</strong>
            <hr className="sidebar__line" />
            {
                [playlists].map((playlist, index) => ( 
                    <SideBarOption key={index.toString()} value={ playlist }/>
              ))
            }
        </div>
    );
}

export default Sidebar;
