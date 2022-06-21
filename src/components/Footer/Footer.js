import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import { FaHouseUser,FaBars,FaUndo,FaVideo } from "react-icons/fa";
import useStyles from './Footer.style';
import { Link, useLocation} from "react-router-dom";

const item =  [
    {
        path: "/",
        name: "home",
        icon: 'faHouseUser',
    },
    {
        path: "/list",
        name: "list",
        icon: 'faBars',
    },
    {
        path: "/player",
        name: "player",
        icon: 'faVideo',
    },
    {
        path: "/placard",
        name: "placard",
        icon: 'faUndo',
    },
   
]
function Footer ({}){

    const classes = useStyles();
    const location = useLocation();
    const itemMenu = useMemo(()=>(item || []),[item]);

    const getIconToShow = (icon, isActive) => {
        const classToApply = isActive ? classes.active : classes.icon;
        const sizeToApply = isActive ? 25: 20;
        switch(icon){
            case 'faHouseUser':
                return <FaHouseUser className={classToApply} size={sizeToApply}/>
            break;
            case 'faVideo':
                return <FaVideo className={classToApply} size={sizeToApply}/>
            break;
            case 'faBars':
                return <FaBars className={classToApply} size={sizeToApply}/>
            break;
            case 'faUndo':
                return <FaUndo className={classToApply} size={sizeToApply}/>
            break;
            default :
                return <FaHouseUser className={classToApply} size={sizeToApply}/>
        }
    };
    return (
        <div className={classes.rootFooter}>
            <div className={classes.footer}>
                {itemMenu.map(({path, icon}, index) => {
                    const isActive = location?.pathname === path || false;
                    return (
                        <div key={index} className={classes.link}>
                            <Link to={path.toString()} >
                                {getIconToShow(icon,isActive)}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
Footer.propTypes = {
    icon: PropTypes.object,
    isActive: PropTypes.bool,
};
Footer.defaultProps = {
    icon: {},
    isActive: false,
};
export default Footer;
