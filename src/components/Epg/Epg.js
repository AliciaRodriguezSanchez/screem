import React,{useEffect, useMemo, useState, useRef, useCallback} from 'react';
import useStyles from './Epg.style';
import PropTypes from 'prop-types';


import Row from './components/row';
import TimeLine from './components/timeLine'
import CellHours from './components/cellHours';

function Epg ({listTv, ...restProps}){

  
    const [refleshComponent, setRefreshComponent]=useState();
    const [positionScroll, setPositionScrooll]=useState();
    const classes = useStyles(restProps);
    const myRef = useRef();

    const data = useMemo(()=> (
        listTv || []
    ),[listTv]);

    useEffect(()=> {
        myRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        })
    },[data]);

   
    const realHour = useMemo(()=> {
        // 1 min => 5 px
        const minutesTotal = (((new Date().getHours()) -1)* 60) + new Date().getMinutes();
        return (minutesTotal * 5) + 101;
    },[refleshComponent]);
  
    useEffect(() => {
        const timer = setInterval(() => {
            setRefreshComponent(new Date().getTime());
       }, 30000);
       return ()=>clearInterval(timer);
    },[]);

    const handleOnClick = useCallback(() => {
        myRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        })
    },[])
    useEffect(() => {
        setPositionScrooll(realHour)
    },[refleshComponent]);

    return (
        <>
            <div  className={classes.root}>
                <div className={classes.scroll}>
                    <div className={classes.contentMain}>
                        <div className={classes.hours}>
                        { new Array(24)
                            .fill()
                            .map((el, hours) => (
                                <CellHours hours={hours} key={`${hours}_cell_hour`} />
                            ))
                        }                  
                        <div> </div>
                        </div>      
                        <div className={classes.rootScheduleTv}>
                            <TimeLine 
                              myRef={myRef}
                              positionScroll={positionScroll}
                            />
                            {(data || []).map(({id, title, images, schedules}, index)=> (
                                <Row 
                                    schedules={schedules}
                                    title={title}
                                    id={id}
                                    key={`${index}_row`}
                                />
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