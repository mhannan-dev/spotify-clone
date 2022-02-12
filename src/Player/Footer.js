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
                <p>Album and songs details</p>
            </div>
            <div className="footer__center">
                <Shuffle className="" />
                <SkipPreviousIcon className="" />
                <PlayCircleOutline className="" />
                <SkipNextIcon className="" />
                <RepeatIcon className="" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                    <PlaylistPlayIcon />
                    </Grid>
                    <Grid item xs={4}>
                    <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                    <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;
