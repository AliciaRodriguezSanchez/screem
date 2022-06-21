import React, { useCallback, useRef, useState } from 'react';
import useStyles from './Player.style';
import {FaPlay, FaRegStopCircle} from "react-icons/fa";

import clsx from 'clsx';

function Player({...restProps}){

    const [activePlay, setActivePlay]=useState(true);
    const classes = useStyles(restProps);
    const videoRef = useRef();

    const handleOnClick = useCallback((evt)=>{
        setActivePlay(!activePlay);
        activePlay ?
           videoRef.current.play() : videoRef.current.pause();
    },[activePlay]);

    return (
        <div className={classes.root}>
            <div className={activePlay? classes.actions : clsx(classes.actions,classes.transitionIcon)}>
                <div onClick={handleOnClick}>{activePlay ? (<FaPlay className={classes.icon}/>) : (<FaRegStopCircle className={classes.icon} />)}</div>
            </div>
            <video id="samp" ref={videoRef}>
                <source src = {'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'} type="video/mp4" />
            </video>
        </div>
     
    )
}

export default Player;