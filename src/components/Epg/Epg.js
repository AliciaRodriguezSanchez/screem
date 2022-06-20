
import React,{useEffect, useMemo, useState, useRef, useCallback} from 'react';
import useStyles from './Epg.style';
import { DAY_OF_WWEK } from '../../constants';
import clsx from 'clsx';


const getWith = (start,end)=> {
    const diff = new Date(end).getTime() - new Date(start).getTime();
    return ((diff / 60000)- 0.2)*5;
};

const formatedDate = (start,end)=> {
    const timeStart = new Date(start);
    const hourStart = timeStart.getHours()< 10 ? `0${timeStart.getHours()}`: timeStart.getHours();
    const minutesStart= timeStart.getMinutes()< 10 ? `0${timeStart.getMinutes()}`: timeStart.getMinutes();
    const timeEnd = new Date(end);
    const hourEnd = timeEnd.getHours()< 10 ? `0${timeEnd.getHours()}`: timeEnd.getHours();
    const minutesEnd= timeEnd.getMinutes()< 10 ? `0${timeEnd.getMinutes()}`: timeEnd.getMinutes();
    const startFormated = `${hourStart}:${minutesStart}`;
    const endFormated = `${hourEnd}:${minutesEnd}`;
    return (`${startFormated} - ${endFormated}`);
};

const isActiveProgram = (start, end)=> {
    const hourStart = new Date(start).getHours()*60 + new Date(start).getMinutes();
    const endEnd = new Date(end).getHours()*60 + new Date(end).getMinutes();
    const now = new Date().getHours()*60 + new Date().getMinutes();
    return (now >= hourStart) && (now <= endEnd);
  };

function Epg ({listTv, ...restProps}){

    const [positionScroll, setPositionScrooll]=useState();
    const [refleshComponent, setRefreshComponent]=useState();
    const classes = useStyles(restProps);
    const myRef = useRef();

    useEffect(()=> {
        myRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        })
    },[positionScroll]);

    const data = useMemo(()=> (
        listTv || []
    ),[listTv]);
   
    const realHour = useMemo(()=> {
        // 1 min => 5 px
        const minutesTotal = (((new Date().getHours()) -1)* 60) + new Date().getMinutes();
        return (minutesTotal * 5) + 101;
    },[]);

    const dayWeek = useMemo(()=> (
        DAY_OF_WWEK[new Date().getDay()]
    ),[]);
    
    const hourWeek = useMemo(()=> {
        const timeStart = new Date();
        const hourStart = timeStart.getHours()< 10 ? `0${timeStart.getHours()}`: timeStart.getHours();
        const minutesStart= timeStart.getMinutes()< 10 ? `0${timeStart.getMinutes()}`: timeStart.getMinutes();
        return (`${hourStart}:${minutesStart}`);
    },[]);
 
    useEffect(() => {
        const timer = setTimeout(() => {
            setRefreshComponent(new Date().getTime());
       }, 30000);
       return ()=>clearTimeout(timer);
    },[refleshComponent]);

    useEffect(() => {
        setPositionScrooll(realHour)
    },[refleshComponent, realHour]);

    const handleOnClick = useCallback(() => {
        myRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        })
    },[])
  
    return (
        <>
            <div  className={classes.root}>
                <div className={classes.scroll}>
                    <div className={classes.contentMain}>
                        <div className={classes.hours}>
                        { new Array(24)
                            .fill()
                            .map((el, hours) => {
                                const stringHour= hours < 10 ?  `0${hours}:00`: `${hours}:00`;
                                return (
                                    <div key={hours}>
                                        <h3 className={classes.h3}>{stringHour}</h3>
                                    </div>)
                            })
                        }                  
                        <div> </div>
                        </div>      
                        <div className={classes.rootScheduleTv}>
                            <div  ref={myRef} 
                                className={classes.line} 
                                style={{
                                    transform: `translateX(${positionScroll}${'px'})`
                            }}>
                                <div className={classes.lineTop}></div>
                                <div className={classes.infotop}>
                                    <div>
                                        <h3 className={classes.h3}>{dayWeek}</h3>
                                        <h5 className={classes.h3}>{hourWeek}</h5>
                                    </div>
                                </div>
                            </div>
                            {(data || []).map(({id, title, images, schedules}, index)=> (
                                <div className={classes.container}>
                                    <div key={`${id}_${index}`}  className={classes.columnFixed}>
                                        <div className={classes.cellFixed}>
                                            <div><h3 className={clsx(classes.h3,classes.alignTextLeft)}>{title}</h3></div>
                                        </div>
                                    </div>
                                    <div key={`${id}_item_${index}`} className={classes.clannelItem}>
                                        {schedules.map(({title, id, start, end}, index)=> {
                                            const withToApply = getWith(start,end);
                                            const isActive = isActiveProgram(start,end);
                                            const key = `${id}${index}`;
                                            return(
                                                <div className={isActive ? classes.itemActive : classes.item} key={key} style={{width : `${withToApply}${'px'}`}}>
                                                    <div className={classes.info}>
                                                        <div><h3 className={classes.h3}>{title}</h3></div>
                                                        <div><h5 className={classes.h5}>{formatedDate(start, end)} </h5></div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                   </div>
                </div>
            </div>
            <div className={classes.btn} onClick={handleOnClick}>
                <h1>Now</h1>
            </div> 
        </>
    )
}
export default Epg;