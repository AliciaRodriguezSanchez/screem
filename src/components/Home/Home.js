import React from 'react';
import useStyles from './Home.style';
import pathName from '../../img/happiness.png';

function Home ({...restProps}){
    const classes = useStyles(restProps);
    return (
        <div  className={classes.root}>
            <div className={classes.home}>
                <div>
                    <div>
                        <h1 className={classes.h1}>Alicia Rodríguez Sánchez</h1>
                    </div>
                    <div>
                        <h2 className={classes.h2}>Technical Test </h2>
                    </div>
                    <div>
                        <img className={classes.images} src={pathName} alt="happiness"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;