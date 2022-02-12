import React from "react";
import './Footer.css'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline'
import Shuffle from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img
                    src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                    alt="logo" className="footer__albumLogo"
                />
                <div className="footer__songInfo">
                    <h4>Yeah!!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer__center">
                <Shuffle className="footer__green"/>
                <SkipPreviousIcon className="" />
                <PlayCircleOutline className="" />
                <SkipNextIcon className="" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item xs={4}>
                        <VolumeDownIcon  className="footer__green"/>
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" className="slider"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;
