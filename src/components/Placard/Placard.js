import React from 'react';
import useStyles from './Placard.style';
import pathname from './../../img/details.png';
import { useMemo } from 'react';

function Placard ({pathImg, title, ...restProps}){
    const classes=useStyles(restProps);
    const nameAlt = useMemo(()=> pathname ? 'placard': '',[]);
    return (
        <div className={classes.root}>
            <img className={classes.img} src={pathname} alt={nameAlt}></img>
        </div>
    )
}
export default Placard;