import React from "react";
import './Body.css'
import Header from '../Body/Header'
import SongsRow from '../Body/SongsRow'
import PlayIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/FavoriteOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                {/* <h3>Recently played</h3> */}
                <img src="https://picsum.photos/250/250" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>Uplifting and energetic music that helps you stay motivated.</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayIcon fontSize="large" className="body__shuffle"/>
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                <SongsRow/>
            </div>
        </div>
    );
}

export default Body;
