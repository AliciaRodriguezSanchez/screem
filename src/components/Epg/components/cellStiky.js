import React from 'react';
import PropTypes from 'prop-types';
import useStyles from '../Epg.style';
import clsx from 'clsx';

function CellStiky ({title,id, ...restProps}){
    const classes = useStyles(restProps);
    return (
        <div key={`${id}_cellStyky`}  className={classes.columnFixed}>
            <div className={classes.cellFixed}>
                <div><h3 className={clsx(classes.h3,classes.alignTextLeft)}>{title}</h3></div>
            </div>
        </div>
    )
}
CellStiky.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
};
CellStiky.defaultProps = {
    title: '',
    id: '',
};
export default CellStiky;