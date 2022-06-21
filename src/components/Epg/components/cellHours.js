import React,{useMemo} from 'react';
import PropTypes from 'prop-types';
import useStyles from '../Epg.style';

function CellHours ({hours,...restProps}){
    const classes = useStyles(restProps);
    const stringHour = useMemo(()=> (
        hours < 10 ?  `0${hours}:00`: `${hours}:00`
    ),[hours])
    return (
        <div key={hours}>
            <h3 className={classes.h3}>{stringHour}</h3>
        </div>
    )
}
CellHours.propTypes = {
    hours: PropTypes.number,
};

export default CellHours;