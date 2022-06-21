import React from 'react';
import PropTypes from 'prop-types';
import { formatedDate, isActiveProgram, getWith} from '../../../utils/utils';
import useStyles from '../Epg.style';

function Cell ({title, start, end, ...restProps}){
    const classes = useStyles(restProps);
    const withToApply = getWith(start,end);
    const isActive = isActiveProgram(start,end);
    return (
        <div className={isActive ? classes.itemActive : classes.item} style={{width : `${withToApply}${'px'}`}}>
            <div className={classes.info}>
                <div><h3 className={classes.h3}>{title}</h3></div>
                <div><h5 className={classes.h5}>{formatedDate(start, end)} </h5></div>
            </div>
        </div>
    )
}
Cell.propTypes = {
    start: PropTypes.string,
    end: PropTypes.string,
    title: PropTypes.string,
};
Cell.defaultProps = {
    start: '',
    end: '',
    title: '',
};
export default Cell;