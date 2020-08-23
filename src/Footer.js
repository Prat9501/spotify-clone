import React from 'react';
import './css_files/Footer.css';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import PauseCircleOutlineOutlinedIcon from '@material-ui/icons/PauseCircleOutlineOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import PlaylistPlayOutlinedIcon from '@material-ui/icons/PlaylistPlayOutlined';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import DevicesOtherOutlinedIcon from '@material-ui/icons/DevicesOtherOutlined';
import { Grid, Slider } from '@material-ui/core';


function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <img 
                    className='footer__albumLogo'
                    src='https://upload.wikimedia.org/wikipedia/commons/7/71/Alan_Walker.jpg'
                    alt='' 
                />
                <div>
                    <h3>End of Time</h3>
                    <p>Alan Walker</p>
                </div>
            </div>

            <div className='footer__center'>
                <ShuffleOutlinedIcon className='footer_icon' />
                <SkipPreviousIcon className='footer_icon'/>
                <PlayCircleOutlineOutlinedIcon className='footer_icon' fontSize='large' />
                <SkipNextIcon className='footer_icon'/>
                <RepeatOutlinedIcon className='footer_icon'/>
            </div>

            <div className='footer__right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayOutlinedIcon />
                    </Grid>
                    <Grid item>
                        <DevicesOtherOutlinedIcon />
                    </Grid>
                    <Grid item>
                        <VolumeUpOutlinedIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
