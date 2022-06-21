import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import useStyles from '../Epg.style';
import { DAY_OF_WWEK } from '../../../constants';


const hourWeek =()=> {
    const timeStart = new Date();
    const hourStart = timeStart.getHours()< 10 ? `0${timeStart.getHours()}`: timeStart.getHours();
    const minutesStart= timeStart.getMinutes()< 10 ? `0${timeStart.getMinutes()}`: timeStart.getMinutes();
    return (`${hourStart}:${minutesStart}`);
};
function TimeLiner ({myRef, positionScroll,...restProps}){
    
    const classes = useStyles(restProps);
    const[dayHourWeek, setDayHourWeek]=useState();

    useEffect(()=>{
        setDayHourWeek(({
            dayWeek:DAY_OF_WWEK[new Date().getDay()],
            hourWeek:hourWeek(),
        }))
    },[positionScroll]);


    return (
        <div ref={myRef} 
            className={classes.line} 
            style={{ transform: `translateX(${positionScroll}${'px'})`}}>
            <div className={classes.lineTop}></div>
            <div className={classes.infotop}>
                <div>
                    <h3 className={classes.h3}>{dayHourWeek?.dayWeek}</h3>
                    <h5 className={classes.h3}>{dayHourWeek?.hourWeek}</h5>
                </div>
            </div>
        </div>
    )
}
TimeLiner.propTypes = {
    myRef: PropTypes.object,
    positionScroll: PropTypes.number,
};
TimeLiner.defaultProps = {
    myRef: {},
    positionScroll: '',
};
export default TimeLiner;