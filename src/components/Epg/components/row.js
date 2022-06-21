
import useStyles from '../Epg.style';
import PropTypes from 'prop-types';
import Cell from './cell';
import CellStiky from './cellStiky';


function Row ({id, title, schedules,...restProps}){
    const classes = useStyles(restProps);
   
    return (
        <div className={classes.container}>
           <CellStiky 
            id={`${id}_row`}
            title={title} />
            <div key={`${id}_item`} className={classes.clannelItem}>
                {schedules.map(({title, id, start, end}, index)=> (
                    <Cell  
                    start={start}
                    end={end}
                    title={title}
                    key={`${index}_cell_${id}`} />
                ))}
            </div>
        </div>
    )
}
Row.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    schedules: PropTypes.array,
};
Row.defaultProps = {
    id: '',
    title: '',
    schedules: [],
};
export default Row;