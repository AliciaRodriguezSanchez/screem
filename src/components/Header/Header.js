import React from 'react';
import useStyles from './Header.style';
import { Link } from "react-router-dom";
import { urlImageHeader } from '../../constants';

function Header (){
    const classes = useStyles();
    return (
       <div className={classes.rootHeader}>
            <div className={classes.header} >
                <Link to="/">
                  <img  alt="Noring Media" src={urlImageHeader} />
                </Link>
            </div>
        </div>
    )
}
export default Header;